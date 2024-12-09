import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			screens: {
				// xl: { min: "1350px" },
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground':
						'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground':
						'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				backgroundImage: {
					'custom-gradient':
						'linear-gradient(100.65deg, #E4FAF3 0.34%, rgba(228, 250, 243, 0.29) 47.86%, #E4FAF3 92.62%, rgba(228, 250, 243, 0.34) 138.07%)'
				},

				borderImage: {
					gradients: {
						'gradient-to-r':
							'linear-gradient(141.87deg, #62CEA6 -13.43%, #72F2C1 46.91%, #66D7AD 98.32%)'
					}
				},

				primary_color: 'var(--primary-color)',
				secondary_color: 'var(--secondary-color)',
				gray_color: 'var(--gray-color)',
				bg_color: 'var(--bg-color)',
				light_green: 'var(--light-green)',
				gray_color_primary: 'var(--gray-color-primary)'
			},
			fontFamily: {
				steppe: ['var(--font-steppe)', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontSize: {
				xl_1: '1.375rem', // 22px
				xl_2: '2rem' // 32
			},
			height: {
				size_1: '3.625rem' // 58px
			}
		}
	},
	plugins: [require('tailwindcss-animate')]

	//   require("tailwindcss-animate")
}
export default config
