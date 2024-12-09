'use client'

import { FC } from 'react'

import { NavItem } from './NavItem'

interface IProps {
	className?: string
}

export const Navigation: FC<IProps> = ({ className }) => {
	return (
		<>
			<ul className={`${className}`}>
				{['PC', 'Xbox', 'PlayStation', 'Nintendo', 'Mobile'].map(
					(link, idx) => (
						<NavItem href={`#`} label={link} key={idx} />
					)
				)}
			</ul>
		</>
	)
}
