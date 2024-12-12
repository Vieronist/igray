'use client'

import { NavigationItem } from '@/constants/navigations'

import { NavItem } from './NavItem'

interface NavigationProps {
	className?: string
	items: NavigationItem[]
}

export const Navigation = (props: NavigationProps) => {
	const { className, items } = props

	return (
		<>
			<ul className={`${className}`}>
				{items.map((item, idx) => (
					<NavItem href={item.href} label={item.label} key={idx} />
				))}
			</ul>
		</>
	)
}
