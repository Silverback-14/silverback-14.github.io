export const ASCII_NAME = ` █████╗ ███╗   ██╗ █████╗ ███╗   ██╗████████╗██╗  ██╗
██╔══██╗████╗  ██║██╔══██╗████╗  ██║╚══██╔══╝██║  ██║
███████║██╔██╗ ██║███████║██╔██╗ ██║   ██║   ███████║
██╔══██║██║╚██╗██║██╔══██║██║╚██╗██║   ██║   ██╔══██║
██║  ██║██║ ╚████║██║  ██║██║ ╚████║   ██║   ██║  ██║
╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝`;

export const BOOT_LINES = [
  { text: 'BIOS v2.4.1 — Ananth Systems Inc.', delay: 0 },
  { text: 'Checking memory... 16384 MB OK', delay: 200 },
  { text: 'Detecting storage... 2TB NVMe SSD', delay: 400 },
  { text: 'Loading kernel... vmlinuz-6.1-ananth', delay: 700 },
  { text: '[OK] Mounted /dev/portfolio', delay: 1000 },
  { text: '[OK] Started Deployment Engine Service', delay: 1200 },
  { text: '[OK] Loaded Python 3.12 runtime', delay: 1400 },
  { text: '[OK] Connected to PostgreSQL cluster', delay: 1600 },
  { text: '[OK] Redis cache warming... done', delay: 1800 },
  { text: '[OK] Kafka streams initialized', delay: 2000 },
  { text: '[OK] Supabase project linked', delay: 2200 },
  { text: '[OK] AWS services connected', delay: 2400 },
  { text: '', delay: 2600 },
  { text: 'All systems operational. Starting terminal...', delay: 2800 },
];

export const IDLE_HINTS = [
  'Still there? Try [accent]/work[/accent] to see what I\'ve built...',
  'Psst — ever tried typing [accent]ls[/accent] in a portfolio?',
  'This terminal has more commands than you think...',
  'Some commands don\'t need a slash. Try: [accent]whoami[/accent]',
  'Try [accent]/themes[/accent] to change the vibe.',
  'Type [accent]/help[/accent] if you\'re lost. No judgement.',
];
