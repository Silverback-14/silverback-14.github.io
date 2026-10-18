import type { Config } from "tailwindcss";

export default {
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Syne"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
				body: ['"DM Sans"', '"Inter"', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
			},
			colors: {
				void: {
					DEFAULT: '#06060a',
					50: '#0d0d14',
					100: '#111118',
					200: '#16161f',
					300: '#1c1c28',
					400: '#252533',
				},
				glow: {
					purple: '#8b5cf6',
					blue: '#3b82f6',
					cyan: '#06b6d4',
					pink: '#ec4899',
					amber: '#f59e0b',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			animation: {
				'marquee-left': 'marquee-left 40s linear infinite',
				'marquee-right': 'marquee-right 40s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
				'grain': 'grain 8s steps(10) infinite',
				'reveal-up': 'reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'fade-in': 'fade-in 1s ease forwards',
				'slide-in-right': 'slide-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
			},
			keyframes: {
				'marquee-left': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				'marquee-right': {
					'0%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '0.8' },
				},
				'grain': {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'10%': { transform: 'translate(-5%, -10%)' },
					'20%': { transform: 'translate(-15%, 5%)' },
					'30%': { transform: 'translate(7%, -25%)' },
					'40%': { transform: 'translate(-5%, 25%)' },
					'50%': { transform: 'translate(-15%, 10%)' },
					'60%': { transform: 'translate(15%, 0%)' },
					'70%': { transform: 'translate(0%, 15%)' },
					'80%': { transform: 'translate(3%, 35%)' },
					'90%': { transform: 'translate(-10%, 10%)' },
				},
				'reveal-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
