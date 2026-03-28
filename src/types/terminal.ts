export interface OutputLine {
  text: string;
  className?: string;
}

export interface HistoryEntry {
  command: string;
  output: OutputLine[];
  timestamp: number;
}
