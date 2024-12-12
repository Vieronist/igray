'use client'

import { cva } from 'class-variance-authority'

interface HeadingProps {
	level: 1
	size?: 'sm' | 'md' | 'lg'
	color?: 'default' | 'primary' | 'secondary'
	className?: string
	children: React.ReactNode
}

const headingVariants = cva('font-steppe font-extrabold leading-[1.1]', {
	variants: {
		level: {
			1: 'text-xl_2 text:lg-xl_3'
			// 2: 'text-3xl',
			// 3: 'text-2xl'
		},
		size: {
			// sm: 'text-sm',
			// md: 'text-base',
			// lg: 'text-lg'
		}
	},
	defaultVariants: {
		level: 1
		// size: 'md'
	}
})

export const Heading = (props: HeadingProps) => {
	const { level, className, children } = props

	const Component = `h${level}` as keyof JSX.IntrinsicElements

	return (
		<Component className={`${headingVariants({ level })} ${className}`}>
			{children}
		</Component>
	)
}
