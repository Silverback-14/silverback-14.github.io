import type { Config } from "tailwindcss";

export default {
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				mono: ['"JetBrains Mono"', '"Fira Code"', '"Cascadia Code"', '"SF Mono"', 'monospace'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [],
} satisfies Config;
