import { useState, useRef, useEffect, useCallback } from 'react';
import { getAutocomplete } from '../../data/commands';

interface TerminalInputProps {
  onSubmit: (command: string) => void;
  onNavigateHistory: (direction: 'up' | 'down') => string;
  onActivity: () => void;
}

export function TerminalInput({ onSubmit, onNavigateHistory, onActivity }: TerminalInputProps) {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<{ name: string; description: string }[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keep input focused
  useEffect(() => {
    const handleClick = () => inputRef.current?.focus();
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
    onActivity();

    if (v.trim().length > 0) {
      const matches = getAutocomplete(v.trim());
      setSuggestions(matches.map(m => ({ name: m.name, description: m.description })));
      setSelectedSuggestion(0);
    } else {
      setSuggestions([]);
    }
  };

  const submitCommand = useCallback((cmd: string) => {
    onSubmit(cmd);
    setValue('');
    setSuggestions([]);
  }, [onSubmit]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitCommand(value);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setValue(suggestions[selectedSuggestion].name);
        setSuggestions([]);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setSelectedSuggestion(prev => Math.max(0, prev - 1));
      } else {
        const cmd = onNavigateHistory('up');
        setValue(cmd);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setSelectedSuggestion(prev => Math.min(suggestions.length - 1, prev + 1));
      } else {
        const cmd = onNavigateHistory('down');
        setValue(cmd);
      }
    } else if (e.key === 'Escape') {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative">
      {/* Autocomplete dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute bottom-full left-0 mb-1 w-full max-w-md bg-surface border border-border rounded-md overflow-hidden shadow-lg z-10">
          {suggestions.map((s, i) => (
            <div
              key={s.name}
              className={`px-3 py-1.5 flex justify-between items-center cursor-pointer text-sm transition-colors ${
                i === selectedSuggestion ? 'bg-accent/20 text-accent' : 'text-foreground hover:bg-white/5'
              }`}
              onClick={() => {
                setValue(s.name);
                setSuggestions([]);
                inputRef.current?.focus();
              }}
            >
              <span className="font-mono">{s.name}</span>
              <span className="text-dim text-xs ml-4">{s.description}</span>
            </div>
          ))}
        </div>
      )}

      {/* Input line */}
      <div className="flex items-center gap-0 font-mono">
        <span className="text-green font-bold shrink-0">ananthram</span>
        <span className="text-dim shrink-0">@</span>
        <span className="text-blue font-bold shrink-0">portfolio</span>
        <span className="text-dim shrink-0">:</span>
        <span className="text-purple font-bold shrink-0">~</span>
        <span className="text-dim shrink-0">$&nbsp;</span>
        <div className="relative flex-1 min-w-0">
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-foreground outline-none caret-transparent font-mono"
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            aria-label="Terminal input"
          />
          {/* Custom blinking cursor */}
          <span
            className="absolute top-0 pointer-events-none text-accent animate-blink"
            style={{ left: `${value.length}ch` }}
          >
            ▋
          </span>
        </div>
      </div>
    </div>
  );
}
