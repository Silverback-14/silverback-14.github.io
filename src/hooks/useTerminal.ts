import { useState, useCallback, useRef, useEffect } from 'react';
import type { OutputLine, HistoryEntry } from '../types/terminal';
import { findCommand } from '../data/commands';
import { IDLE_HINTS } from '../data/ascii';
import { getTheme, applyTheme } from '../data/themes';
import {
  HELP_OUTPUT, ABOUT_OUTPUT, WORK_OUTPUT, SKILLS_OUTPUT,
  EXPERIENCE_OUTPUT, EDUCATION_OUTPUT, CONTACT_OUTPUT, THEMES_OUTPUT,
  LS_OUTPUT, CAT_README_OUTPUT, NEOFETCH_OUTPUT,
  SUDO_HIRE_OUTPUT, COFFEE_OUTPUT, WHOAMI_OUTPUT, SECRETS_OUTPUT,
  PWD_OUTPUT, UPTIME_OUTPUT, PING_OUTPUT, RM_RF_OUTPUT,
  UNKNOWN_COMMAND, CALENDLY_URL,
} from '../data/content';

export function useTerminal() {
  // Welcome is rendered separately by WelcomeSection — outputBlocks is commands only
  const [outputBlocks, setOutputBlocks] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [matrixActive, setMatrixActive] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [commandCount, setCommandCount] = useState(0);

  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const idleCountRef = useRef(0);
  const [idleHint, setIdleHint] = useState<string | null>(null);

  const resetIdleTimer = useCallback(() => {
    setIdleHint(null);
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => {
      const hint = IDLE_HINTS[idleCountRef.current % IDLE_HINTS.length];
      setIdleHint(hint);
      idleCountRef.current++;
    }, 12000);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  const processCommand = useCallback((input: string) => {
    const trimmed = input.trim();
    if (!trimmed) return;

    resetIdleTimer();
    setCommandCount(prev => prev + 1);

    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const cmd = findCommand(trimmed);
    const cmdName = cmd?.name || trimmed.toLowerCase();

    let output: OutputLine[];

    // External links
    const externalLinks: Record<string, string> = {
      '/github': 'https://github.com/silverback-14',
      '/linkedin': 'https://linkedin.com/in/ananthram-v',
      '/resume': 'https://drive.google.com/file/d/12sN7Fdeu6_YOY-BFxSTvaguX17myt0JU/view?usp=sharing',
      '/email': 'mailto:ananthram1411@gmail.com',
      '/meet': CALENDLY_URL,
    };

    if (externalLinks[cmdName]) {
      window.open(externalLinks[cmdName], '_blank');
      output = [{ text: `  Opening ${cmdName.slice(1)}...`, className: 'text-green' }];
    } else if (['/dark', '/light', '/retro', '/glass'].includes(cmdName)) {
      const slug = cmdName.slice(1);
      const theme = getTheme(slug);
      if (theme) {
        applyTheme(theme);
        setCurrentTheme(slug);
        if (slug === 'retro') {
          output = [
            { text: '' },
            { text: '  ▓ CRT mode engaged. Welcome to 1983.', className: 'text-green font-bold' },
            { text: '  Scanlines: ON | Phosphor: GREEN | Nostalgia: MAX', className: 'text-dim' },
            { text: '' },
          ];
        } else {
          output = [
            { text: '' },
            { text: `  Theme switched to [accent]${theme.name}[/accent].` },
            { text: '' },
          ];
        }
      } else {
        output = UNKNOWN_COMMAND(trimmed);
      }
    } else {
      switch (cmdName) {
        case '/help':
          output = HELP_OUTPUT;
          break;
        case '/about':
          output = ABOUT_OUTPUT;
          break;
        case '/work':
          output = WORK_OUTPUT;
          break;
        case '/skills':
          output = SKILLS_OUTPUT;
          break;
        case '/experience':
          output = EXPERIENCE_OUTPUT;
          break;
        case '/education':
          output = EDUCATION_OUTPUT;
          break;
        case '/contact':
          output = CONTACT_OUTPUT;
          break;
        case '/themes':
          output = THEMES_OUTPUT;
          break;
        case '/clear':
          setOutputBlocks([]);
          return;
        case 'ls':
          output = LS_OUTPUT;
          break;
        case 'cat README.md':
          output = CAT_README_OUTPUT;
          break;
        case 'neofetch':
          output = NEOFETCH_OUTPUT;
          break;
        case 'sudo hire ananth':
          output = SUDO_HIRE_OUTPUT;
          break;
        case '/coffee':
          output = COFFEE_OUTPUT;
          break;
        case '/matrix':
          setMatrixActive(prev => !prev);
          output = [{ text: '  Toggling the matrix...', className: 'text-green' }];
          break;
        case 'whoami':
          output = WHOAMI_OUTPUT;
          break;
        case '/secrets':
          output = SECRETS_OUTPUT;
          break;
        case 'pwd':
          output = PWD_OUTPUT;
          break;
        case 'uptime':
          output = UPTIME_OUTPUT;
          break;
        case 'ping':
          output = PING_OUTPUT;
          break;
        case 'rm -rf /':
          output = RM_RF_OUTPUT;
          break;
        default:
          output = UNKNOWN_COMMAND(trimmed);
      }
    }

    // Occasional system hints based on command count
    if (commandCount > 0 && commandCount % 4 === 0) {
      output = [
        ...output,
        { text: `  [dim][system] You've run ${commandCount + 1} commands. There are more hiding beneath the surface.[/dim]` },
      ];
    }

    setOutputBlocks(prev => [...prev, {
      command: trimmed,
      output,
      timestamp: Date.now(),
    }]);
  }, [resetIdleTimer, commandCount]);

  const navigateHistory = useCallback((direction: 'up' | 'down'): string => {
    if (commandHistory.length === 0) return '';

    let newIndex: number;
    if (direction === 'up') {
      newIndex = historyIndex === -1
        ? commandHistory.length - 1
        : Math.max(0, historyIndex - 1);
    } else {
      newIndex = historyIndex === -1
        ? -1
        : historyIndex >= commandHistory.length - 1
          ? -1
          : historyIndex + 1;
    }

    setHistoryIndex(newIndex);
    return newIndex === -1 ? '' : commandHistory[newIndex];
  }, [commandHistory, historyIndex]);

  return {
    outputBlocks,
    processCommand,
    navigateHistory,
    matrixActive,
    setMatrixActive,
    currentTheme,
    idleHint,
    resetIdleTimer,
  };
}
