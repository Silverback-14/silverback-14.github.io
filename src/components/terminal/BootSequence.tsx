import { useState, useEffect, useCallback } from 'react';
import { BOOT_LINES } from '../../data/ascii';

interface BootSequenceProps {
  onComplete: () => void;
}

export function BootSequence({ onComplete }: BootSequenceProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    if (skipAnimation) {
      onComplete();
      return;
    }

    if (visibleLines < BOOT_LINES.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
      }, BOOT_LINES[visibleLines]?.delay ? BOOT_LINES[visibleLines].delay - (BOOT_LINES[visibleLines - 1]?.delay || 0) : 200);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShowPrompt(true), 400);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, skipAnimation, onComplete]);

  const handleSkip = useCallback(() => {
    setSkipAnimation(true);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        if (showPrompt) {
          onComplete();
        } else {
          handleSkip();
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [showPrompt, onComplete, handleSkip]);

  return (
    <div
      className="fixed inset-0 bg-background z-50 flex items-center justify-center cursor-pointer"
      onClick={showPrompt ? onComplete : handleSkip}
    >
      <div className="w-full max-w-2xl px-6 font-mono text-sm">
        {/* Scan line overlay */}
        <div className="pointer-events-none fixed inset-0 scanlines opacity-[0.03]" />

        {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className={`leading-relaxed ${
              line.text.startsWith('[OK]')
                ? 'text-green'
                : line.text === ''
                  ? ''
                  : 'text-dim'
            } animate-line-appear`}
          >
            {line.text.startsWith('[OK]') ? (
              <>
                <span className="text-green font-bold">[OK]</span>
                <span className="text-foreground">{line.text.slice(4)}</span>
              </>
            ) : (
              line.text || '\u00A0'
            )}
          </div>
        ))}

        {showPrompt && (
          <div className="mt-6 animate-line-appear">
            <div className="text-accent text-base font-bold animate-pulse">
              Press any key to continue...
            </div>
          </div>
        )}

        {!showPrompt && visibleLines > 0 && (
          <div className="fixed bottom-6 right-6 text-dim text-xs animate-pulse">
            Press any key to skip
          </div>
        )}
      </div>
    </div>
  );
}
