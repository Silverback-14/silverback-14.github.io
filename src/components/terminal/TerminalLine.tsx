import { useMemo } from 'react';
import type { OutputLine } from '../../types/terminal';

// Parse custom markup: [accent]text[/accent], [link:url]text[/link], [red], [green], etc.
function parseMarkup(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  // Match tags like [accent], [/accent], [link:url], [red], [cyan], [green], [blue], [purple], [yellow], [dim]
  const regex = /\[(accent|cyan|green|blue|red|yellow|purple|dim|\/accent|\/cyan|\/green|\/blue|\/red|\/yellow|\/purple|\/dim|link:[^\]]+|\/link)\]/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const stack: { tag: string; url?: string; startIndex: number }[] = [];
  const segments: { start: number; end: number; tag: string; url?: string }[] = [];

  // First pass: find all matching open/close pairs
  const opens: { tag: string; url?: string; index: number; matchEnd: number }[] = [];
  const tempText = text;

  while ((match = regex.exec(tempText)) !== null) {
    const fullTag = match[1];
    if (fullTag.startsWith('/')) {
      // Closing tag
      const openTag = fullTag.slice(1);
      for (let i = opens.length - 1; i >= 0; i--) {
        if (opens[i].tag === openTag) {
          segments.push({
            start: opens[i].matchEnd,
            end: match.index,
            tag: openTag,
            url: opens[i].url,
          });
          opens.splice(i, 1);
          break;
        }
      }
    } else if (fullTag.startsWith('link:')) {
      opens.push({ tag: 'link', url: fullTag.slice(5), index: match.index, matchEnd: match.index + match[0].length });
    } else {
      opens.push({ tag: fullTag, index: match.index, matchEnd: match.index + match[0].length });
    }
  }

  if (segments.length === 0) {
    return [text];
  }

  // Sort segments by their position in the string and reconstruct
  segments.sort((a, b) => a.start - b.start);

  // Rebuild with all the tag markers removed
  let cursor = 0;
  const tagColorMap: Record<string, string> = {
    accent: 'text-accent',
    cyan: 'text-cyan',
    green: 'text-green',
    blue: 'text-blue',
    red: 'text-red',
    yellow: 'text-yellow',
    purple: 'text-purple',
    dim: 'text-dim',
  };

  // Simple approach: remove all tags, then apply spans
  let cleaned = text.replace(/\[(accent|cyan|green|blue|red|yellow|purple|dim|\/accent|\/cyan|\/green|\/blue|\/red|\/yellow|\/purple|\/dim|link:[^\]]+|\/link)\]/g, '');

  // For simplicity with nested/complex cases, let's do a direct render approach
  const result: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  // Simple recursive parser
  function renderText(input: string): React.ReactNode[] {
    const nodes: React.ReactNode[] = [];
    const tagRegex = /\[(accent|cyan|green|blue|red|yellow|purple|dim|link:[^\]]+)\]([\s\S]*?)\[\/\1\]|\[(link:[^\]]+)\]([\s\S]*?)\[\/link\]/;

    let str = input;
    while (str.length > 0) {
      // Try to match [tag]...[/tag]
      const m = str.match(/\[(accent|cyan|green|blue|red|yellow|purple|dim)\]([\s\S]*?)\[\/\1\]/);
      const mLink = str.match(/\[link:([^\]]+)\]([\s\S]*?)\[\/link\]/);

      // Find the earliest match
      let earliest: { index: number; length: number; node: React.ReactNode } | null = null;

      if (m && m.index !== undefined) {
        const inner = m[2];
        const cls = tagColorMap[m[1]] || '';
        earliest = {
          index: m.index,
          length: m[0].length,
          node: <span key={key++} className={cls}>{renderText(inner)}</span>,
        };
      }

      if (mLink && mLink.index !== undefined) {
        if (!earliest || mLink.index < earliest.index) {
          earliest = {
            index: mLink.index,
            length: mLink[0].length,
            node: (
              <a
                key={key++}
                href={mLink[1]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-bright underline underline-offset-2 transition-colors"
              >
                {mLink[2]}
              </a>
            ),
          };
        }
      }

      if (earliest) {
        if (earliest.index > 0) {
          nodes.push(str.slice(0, earliest.index));
        }
        nodes.push(earliest.node);
        str = str.slice(earliest.index + earliest.length);
      } else {
        nodes.push(str);
        break;
      }
    }

    return nodes;
  }

  return renderText(text);
}

interface TerminalLineProps {
  line: OutputLine;
  animate?: boolean;
  animationDelay?: number;
}

export function TerminalLine({ line, animate = false, animationDelay = 0 }: TerminalLineProps) {
  const content = useMemo(() => parseMarkup(line.text), [line.text]);

  return (
    <div
      className={`terminal-line whitespace-pre-wrap break-words ${line.className || ''} ${animate ? 'animate-line-appear' : ''}`}
      style={animate ? { animationDelay: `${animationDelay}ms` } : undefined}
    >
      {content}
    </div>
  );
}

interface PromptLineProps {
  command: string;
}

export function PromptLine({ command }: PromptLineProps) {
  return (
    <div className="terminal-line whitespace-pre-wrap break-words">
      <span className="text-green font-bold">ananthram</span>
      <span className="text-dim">@</span>
      <span className="text-blue font-bold">portfolio</span>
      <span className="text-dim">:</span>
      <span className="text-purple font-bold">~</span>
      <span className="text-dim">$ </span>
      <span className="text-foreground">{command}</span>
    </div>
  );
}
