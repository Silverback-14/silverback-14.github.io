export interface CommandDef {
  name: string;
  description: string;
  aliases?: string[];
  category: 'navigation' | 'quick' | 'theme' | 'easter' | 'system';
  hidden?: boolean;
}

export const COMMANDS: CommandDef[] = [
  // Navigation
  { name: '/help', description: 'List all available commands', aliases: ['help', '?'], category: 'navigation' },
  { name: '/about', description: 'Who is Ananth?', aliases: ['about', '/me'], category: 'navigation' },
  { name: '/work', description: 'Featured projects & builds', aliases: ['work', '/projects', 'projects', '/portfolio'], category: 'navigation' },
  { name: '/skills', description: 'Expertise & capabilities', aliases: ['skills', '/tech', 'tech', '/expertise'], category: 'navigation' },
  { name: '/experience', description: 'Work experience timeline', aliases: ['experience', '/exp', 'exp'], category: 'navigation' },
  { name: '/education', description: 'Academic background', aliases: ['education', '/edu', 'edu'], category: 'navigation' },
  { name: '/contact', description: 'Get in touch', aliases: ['contact', '/hire'], category: 'navigation' },
  { name: '/clear', description: 'Clear the terminal', aliases: ['clear', 'cls'], category: 'system' },

  // Quick links
  { name: '/github', description: 'GitHub profile', aliases: ['github', 'gh'], category: 'quick' },
  { name: '/linkedin', description: 'LinkedIn profile', aliases: ['linkedin', 'li'], category: 'quick' },
  { name: '/resume', description: 'View resume', aliases: ['resume', 'cv'], category: 'quick' },
  { name: '/email', description: 'Email address', aliases: ['email', 'mail'], category: 'quick' },

  // Themes
  { name: '/dark', description: 'Dark mode (default)', aliases: ['dark'], category: 'theme' },
  { name: '/light', description: 'Light mode', aliases: ['light'], category: 'theme' },
  { name: '/retro', description: 'Retro CRT mode', aliases: ['retro'], category: 'theme' },
  { name: '/glass', description: 'Modern glass mode', aliases: ['glass'], category: 'theme' },
  { name: '/themes', description: 'Browse all themes', aliases: ['themes'], category: 'theme' },

  // Easter eggs
  { name: 'sudo hire ananth', description: '', category: 'easter', hidden: true },
  { name: '/matrix', description: 'Enter the matrix', category: 'easter', hidden: true },
  { name: '/coffee', description: 'Brew some coffee', category: 'easter', hidden: true },
  { name: 'ls', description: 'List skills as files', category: 'easter', hidden: true },
  { name: 'cat README.md', description: 'Read the README', category: 'easter', hidden: true },
  { name: 'neofetch', description: 'System info', category: 'easter', hidden: true },
  { name: 'whoami', description: 'Who are you?', category: 'easter', hidden: true },
  { name: '/secrets', description: 'Hidden things', category: 'easter', hidden: true },
  { name: 'pwd', description: 'Current directory', category: 'easter', hidden: true },
  { name: 'uptime', description: 'System uptime', category: 'easter', hidden: true },
  { name: 'ping', description: 'Ping pong', category: 'easter', hidden: true },
  { name: 'rm -rf /', description: 'Nice try', category: 'easter', hidden: true },
];

export function findCommand(input: string): CommandDef | null {
  const trimmed = input.trim().toLowerCase();
  return COMMANDS.find(cmd =>
    cmd.name.toLowerCase() === trimmed ||
    cmd.aliases?.some(a => a.toLowerCase() === trimmed)
  ) || null;
}

export function getAutocomplete(partial: string): CommandDef[] {
  const p = partial.trim().toLowerCase();
  if (!p) return [];
  return COMMANDS.filter(cmd =>
    !cmd.hidden && (
      cmd.name.toLowerCase().startsWith(p) ||
      cmd.aliases?.some(a => a.toLowerCase().startsWith(p))
    )
  );
}
