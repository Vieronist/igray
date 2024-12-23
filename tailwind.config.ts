import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/views/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/modules/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/elements/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		screens: {
			xs: '390px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			xl_1: '1450px',
			'2xl': '1536px'
		},
		extend: {
			// screens: {
			// 	xs: {
			// 		min: '24.375rem'
			// 	},
			// 	xl_1: {
			// 		min: '90.625rem'
			// 	}
			// },
			boxShadow: {
				primary_bg: '0 4px 44px 0 rgba(31, 50, 56, 0.12)'
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
					'custom-gradient-2':
						'linear-gradient(134deg, #e4faf3 0%, rgba(228, 250, 243, 0.29) 34.5%, #e4faf3 67%, rgba(228, 250, 243, 0.34) 100%)'
				},
				borderImage: {
					gradients: {
						'gradient-to-r':
							'linear-gradient(141.87deg, #62CEA6 -13.43%, #72F2C1 46.91%, #66D7AD 98.32%)'
					}
				},
				primary_color: 'var(--primary-color)',
				primary_opacity_color: 'var(--primary-opacity-color)',
				secondary_color: 'var(--secondary-color)',
				gray_color: 'var(--gray-color)',
				bg_color: 'var(--bg-color)',
				bg_hover_color: 'var(--bg-hover-color)',
				light_green: 'var(--light-green)',
				light_green_border: 'var(--light-green-border)',
				gray_color_primary: 'var(--gray-color-primary)',
				bg_dark_color: 'var(--bg-dark-color)',
				secondary_gray_color: 'var(--secondary-gray-color)'
			},
			fontFamily: {
				steppe: ['var(--font-steppe)', 'sans-serif'],
				montserrat: ['var(--font-montserrat)', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl_1: '2.5rem',
				xl_2: '6.25rem',
				xl_3: '2.125rem',
				xl_4: '3.125rem'
			},
			fontSize: {
				xl_1: '1.375rem',
				xl_2: '2rem',
				xl_3: '2.875rem',
				xl_4: '1.875rem',
				xl_5: '1.75rem',
				xl_6: '0.625rem'
			},
			height: {
				size_1: '3.625rem',
				size_2: '8.375rem'
			},
			minHeight: {
				size_1: '3.625rem',
				size_2: '8.375rem'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]

	//   require("tailwindcss-animate")
}
export default config
