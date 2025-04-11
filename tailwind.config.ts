import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enhanced colors for our site
				mountain: {
					50: '#f5f7fa',
					100: '#ebeef3',
					200: '#d2dae6',
					300: '#a9bacf',
					400: '#7a94b5',
					500: '#5b779a',
					600: '#49617f',
					700: '#3d4e67',
					800: '#364357',
					900: '#303b4b',
					950: '#1e2431',
				},
				nature: {
					50: '#f4f9f3',
					100: '#e5f2e3',
					200: '#cce4c7',
					300: '#a4cea0',
					400: '#74b26e',
					500: '#539748',
					600: '#3f7939',
					700: '#336030',
					800: '#2c4d2b',
					900: '#254126',
					950: '#132414',
				},
				// New aesthetic colors
				indigo: {
					50: '#eeeaff',
					100: '#d8d1ff',
					200: '#b1a3ff',
					300: '#8b76ff',
					400: '#7057ff',
					500: '#4b3bff',
					600: '#3c2fcc',
					700: '#2d2399',
					800: '#1e1866',
					900: '#0f0c33',
				},
				teal: {
					50: '#e6fffa',
					100: '#ccfff5',
					200: '#99ffeb',
					300: '#66ffe0',
					400: '#33ffd6',
					500: '#00e5c8',
					600: '#00b7a0',
					700: '#008978',
					800: '#005c50',
					900: '#002e28',
				},
				lavender: {
					50: '#f3efff',
					100: '#e7dfff',
					200: '#cfbeff',
					300: '#b79eff',
					400: '#9f7eff',
					500: '#875dff',
					600: '#6c4acc',
					700: '#513899',
					800: '#362566',
					900: '#1b1333',
				},
				rose: {
					50: '#fff0f5',
					100: '#ffe0eb',
					200: '#ffc2d7',
					300: '#ffa3c3',
					400: '#ff85af',
					500: '#ff669b',
					600: '#cc527c',
					700: '#993d5d',
					800: '#66293e',
					900: '#33141f',
				},
				mint: {
					50: '#f0fff3',
					100: '#e0ffe8',
					200: '#c2ffd1',
					300: '#a3ffba',
					400: '#85ffa3',
					500: '#66ff8c',
					600: '#52cc70',
					700: '#3d9954',
					800: '#296638',
					900: '#14331c',
				},
				aurora: {
					50: '#e6fbff',
					100: '#ccf7ff',
					200: '#99eeff',
					300: '#66e6ff',
					400: '#33ddff',
					500: '#00d5ff',
					600: '#00aacc',
					700: '#008099',
					800: '#005566',
					900: '#002b33',
				},
				nebula: {
					50: '#f0e6ff',
					100: '#e0ccff',
					200: '#c299ff',
					300: '#a366ff',
					400: '#8533ff',
					500: '#6600ff',
					600: '#5200cc',
					700: '#3d0099',
					800: '#290066',
					900: '#140033',
				},
				cosmos: {
					50: '#fde5ff',
					100: '#faccff',
					200: '#f599ff',
					300: '#f066ff',
					400: '#eb33ff',
					500: '#e600ff',
					600: '#b800cc',
					700: '#8a0099',
					800: '#5c0066',
					900: '#2e0033',
				},
				cyber: {
					50: '#e8fbfd',
					100: '#d1f7fa',
					200: '#a3eff6',
					300: '#75e7f1',
					400: '#47dfed',
					500: '#19d7e8',
					600: '#14acba',
					700: '#0f818b',
					800: '#0a565d',
					900: '#052b2e',
				},
				neon: {
					50: '#eafcf1',
					100: '#d5f9e3',
					200: '#abf3c7',
					300: '#82eeab',
					400: '#58e88f',
					500: '#2ee373',
					600: '#25b55c',
					700: '#1c8845',
					800: '#135a2e',
					900: '#092d17',
				},
				quantum: {
					50: '#fff0fd',
					100: '#ffe0fa',
					200: '#ffc2f6',
					300: '#ffa3f1',
					400: '#ff85ed',
					500: '#ff66e8',
					600: '#cc52ba',
					700: '#993d8b',
					800: '#66295d',
					900: '#33142e',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'cyber-pulse': {
					'0%, 100%': { boxShadow: '0 0 0 0 rgba(25, 215, 232, 0)' },
					'50%': { boxShadow: '0 0 0 15px rgba(25, 215, 232, 0.3)' }
				},
				'neon-flicker': {
					'0%, 100%': { opacity: '1', filter: 'brightness(1)' },
					'40%': { opacity: '0.8', filter: 'brightness(0.8)' },
					'42%': { opacity: '1', filter: 'brightness(1.2)' },
					'43%': { opacity: '0.8', filter: 'brightness(0.8)' },
					'45%': { opacity: '1', filter: 'brightness(1)' },
					'80%': { opacity: '0.9', filter: 'brightness(0.9)' },
				},
				'quantum-shift': {
					'0%': { transform: 'translateX(0) translateY(0) rotate(0)' },
					'20%': { transform: 'translateX(-5px) translateY(-2px) rotate(1deg)' },
					'40%': { transform: 'translateX(5px) translateY(2px) rotate(-1deg)' },
					'60%': { transform: 'translateX(-3px) translateY(-1px) rotate(0.5deg)' },
					'80%': { transform: 'translateX(3px) translateY(1px) rotate(-0.5deg)' },
					'100%': { transform: 'translateX(0) translateY(0) rotate(0)' },
				},
				'soft-pulse': {
					'0%, 100%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.05)', opacity: '0.8' }
				},
				'soft-float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'shimmer-elegant': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'scale-out': 'scale-out 0.3s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-out-right': 'slide-out-right 0.5s ease-out',
				'enter': 'fade-in 0.5s ease-out, scale-in 0.3s ease-out',
				'exit': 'fade-out 0.5s ease-out, scale-out 0.3s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'shimmer': 'shimmer 3s infinite linear',
				'cyber-pulse': 'cyber-pulse 2s ease-in-out infinite',
				'neon-flicker': 'neon-flicker 5s ease-in-out infinite',
				'quantum-shift': 'quantum-shift 8s ease-in-out infinite',
				'soft-pulse': 'soft-pulse 4s ease-in-out infinite',
				'soft-float': 'soft-float 6s ease-in-out infinite',
				'shimmer-elegant': 'shimmer-elegant 3s infinite linear',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
