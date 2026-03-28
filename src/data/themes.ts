export interface Theme {
  name: string;
  slug: string;
  vars: Record<string, string>;
  scanlineOpacity: string;
  extraClass?: string;
}

export const THEMES: Theme[] = [
  {
    name: 'Dark',
    slug: 'dark',
    vars: {
      '--col-bg': '234 35% 14%',
      '--col-surface': '240 23% 20%',
      '--col-titlebar': '240 20% 16%',
      '--col-border': '240 15% 25%',
      '--col-foreground': '240 30% 94%',
      '--col-dim': '240 10% 55%',
      '--col-accent': '25 70% 70%',
      '--col-accent-bright': '25 80% 78%',
      '--col-green': '150 45% 65%',
      '--col-blue': '215 65% 70%',
      '--col-cyan': '185 55% 65%',
      '--col-red': '0 65% 70%',
      '--col-yellow': '50 65% 70%',
      '--col-purple': '270 45% 70%',
    },
    scanlineOpacity: '0.02',
  },
  {
    name: 'Light',
    slug: 'light',
    vars: {
      '--col-bg': '220 20% 96%',
      '--col-surface': '220 20% 99%',
      '--col-titlebar': '220 15% 93%',
      '--col-border': '220 15% 85%',
      '--col-foreground': '234 30% 15%',
      '--col-dim': '234 10% 55%',
      '--col-accent': '25 80% 45%',
      '--col-accent-bright': '25 90% 50%',
      '--col-green': '150 55% 35%',
      '--col-blue': '215 65% 45%',
      '--col-cyan': '185 55% 38%',
      '--col-red': '0 65% 50%',
      '--col-yellow': '45 80% 40%',
      '--col-purple': '270 45% 50%',
    },
    scanlineOpacity: '0',
  },
  {
    name: 'Retro CRT',
    slug: 'retro',
    vars: {
      '--col-bg': '120 10% 5%',
      '--col-surface': '120 10% 7%',
      '--col-titlebar': '120 10% 4%',
      '--col-border': '120 15% 18%',
      '--col-foreground': '120 80% 65%',
      '--col-dim': '120 30% 35%',
      '--col-accent': '120 90% 55%',
      '--col-accent-bright': '120 95% 65%',
      '--col-green': '120 80% 55%',
      '--col-blue': '120 50% 50%',
      '--col-cyan': '120 60% 55%',
      '--col-red': '0 70% 55%',
      '--col-yellow': '120 70% 60%',
      '--col-purple': '120 40% 50%',
    },
    scanlineOpacity: '0.08',
    extraClass: 'retro-crt',
  },
  {
    name: 'Glass',
    slug: 'glass',
    vars: {
      '--col-bg': '225 25% 12%',
      '--col-surface': '225 20% 16%',
      '--col-titlebar': '225 22% 13%',
      '--col-border': '225 20% 28%',
      '--col-foreground': '225 30% 92%',
      '--col-dim': '225 15% 52%',
      '--col-accent': '200 85% 65%',
      '--col-accent-bright': '200 90% 72%',
      '--col-green': '160 50% 60%',
      '--col-blue': '200 70% 65%',
      '--col-cyan': '190 60% 62%',
      '--col-red': '350 60% 65%',
      '--col-yellow': '45 60% 65%',
      '--col-purple': '260 50% 68%',
    },
    scanlineOpacity: '0',
  },
];

export function getTheme(slug: string): Theme | undefined {
  return THEMES.find(t => t.slug === slug);
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  for (const [key, value] of Object.entries(theme.vars)) {
    root.style.setProperty(key, value);
  }

  // Remove all theme extra classes
  root.classList.remove('retro-crt');
  if (theme.extraClass) {
    root.classList.add(theme.extraClass);
  }
}
