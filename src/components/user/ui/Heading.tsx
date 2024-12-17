'use client'

import { cva } from 'class-variance-authority'

interface HeadingProps {
	level: 1 | 2 | 3
	size?: 'sm' | 'md' | 'lg'
	color?: 'default' | 'primary' | 'secondary'
	className?: string
	children: React.ReactNode
}

const headingVariants = cva('font-steppe font-extrabold leading-[1.1]', {
	variants: {
		size: {
			lg: 'text-xl_2 lg:text-xl_3',
			md: 'text-xl_5',
			sm: 'text-xl_1'
		}
	},
	defaultVariants: {
		size: 'lg'
	}
})

export const Heading = (props: HeadingProps) => {
	const { level, className, children, size } = props

	const HeaderTag = `h${level}` as keyof JSX.IntrinsicElements

	return (
		<HeaderTag className={`${headingVariants({ size })} ${className}`}>
			{children}
		</HeaderTag>
	)
}
