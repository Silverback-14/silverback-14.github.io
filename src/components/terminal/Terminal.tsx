import { useRef, useEffect, useState, useCallback } from 'react';
import { useTerminal } from '../../hooks/useTerminal';
import { TerminalLine, PromptLine } from './TerminalLine';
import { TerminalInput } from './TerminalInput';
import { BootSequence } from './BootSequence';
import { MatrixRain } from './MatrixRain';
import { WelcomeSection } from './WelcomeSection';

export function Terminal() {
  const [booted, setBooted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const {
    outputBlocks,
    processCommand,
    navigateHistory,
    matrixActive,
    setMatrixActive,
    currentTheme,
    idleHint,
    resetIdleTimer,
  } = useTerminal();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [outputBlocks, idleHint]);

  useEffect(() => {
    if (booted) resetIdleTimer();
  }, [booted, resetIdleTimer]);

  const handleBootComplete = useCallback(() => setBooted(true), []);

  if (!booted) {
    return <BootSequence onComplete={handleBootComplete} />;
  }

  return (
    <>
      <MatrixRain active={matrixActive} onClose={() => setMatrixActive(false)} />

      {/* Blurred wallpaper background */}
      <div className="bg-wallpaper" />

      <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 md:p-6 z-10">
        {/* CRT scan lines */}
        <div className="pointer-events-none fixed inset-0 scanlines opacity-[var(--scanline-opacity,0.02)]" />
        <div className="pointer-events-none fixed inset-0 retro-vignette" />

        {/* Terminal window */}
        <div className="w-full max-w-6xl h-full max-h-[92vh] flex flex-col rounded-xl overflow-hidden border border-border/50 shadow-2xl shadow-black/60 bg-surface terminal-window">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-titlebar shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 transition-all" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-110 transition-all" />
              <div className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-110 transition-all" />
            </div>
            <div className="flex-1 text-center text-dim text-xs font-mono tracking-wider">
              ananth@portfolio ~ /portfolio
            </div>
            <div className="w-[52px]" />
          </div>

          {/* Terminal body */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto overflow-x-hidden px-5 sm:px-8 py-5 font-mono text-sm leading-relaxed scroll-smooth terminal-scrollbar"
          >
            {/* Welcome section — always visible, never cleared */}
            <WelcomeSection />

            {/* Command output blocks */}
            {outputBlocks.map((block) => (
              <div key={block.timestamp} className="mb-2">
                {block.command && <PromptLine command={block.command} />}
                {block.output.map((line, lineIndex) => (
                  <TerminalLine
                    key={lineIndex}
                    line={line}
                    animate
                    animationDelay={lineIndex * 12}
                  />
                ))}
              </div>
            ))}

            {/* Idle hint */}
            {idleHint && (
              <div className="mt-4 animate-line-appear">
                <TerminalLine
                  line={{ text: idleHint, className: 'text-dim text-xs italic' }}
                />
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="shrink-0 px-5 sm:px-8 py-3">
            <TerminalInput
              onSubmit={processCommand}
              onNavigateHistory={navigateHistory}
              onActivity={resetIdleTimer}
            />
          </div>
        </div>
      </div>
    </>
  );
}
