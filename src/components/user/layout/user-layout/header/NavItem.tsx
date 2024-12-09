'use client'

import useHover from '@react-hook/hover'
import Link from 'next/link'
import React, { FC } from 'react'

import { useServiceStore } from '@/store/service.store'

import { cn } from '@/utils/clsx'

import styles from './NavigationChildren.module.scss'

interface IProps {
	label: string
	href: string
	className?: string
	target?: '_blank' | '_self'
	isChildrenNavigation?: boolean
}

export const NavItem: FC<IProps> = ({ label, href, className, target }) => {
	// const [isMenu, setIsMenu] = useState(false)

	const ref = React.useRef(null)
	const subMenuRef = React.useRef(null)
	const isHovering = useHover(ref, { enterDelay: 100, leaveDelay: 200 })
	const isHoveringSubMenu = useHover(subMenuRef, {
		enterDelay: 200,
		leaveDelay: 200
	})

	// useEffect(() => {
	// 	if (isHovering || isHoveringSubMenu) {
	// 		setIsMenu(true)
	// 	} else {
	// 		setIsMenu(false)
	// 	}
	// }, [isHovering, isHoveringSubMenu])

	const { setIsModalVisible } = useServiceStore()

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		setIsModalVisible(href === '#' && true)
	}

	return (
		<li
			ref={ref}
			className={cn(styles.parentListItem, className, `relative z-10`)}
			onClick={handleClick}
		>
			{href === '#' ? (
				<button
					className={cn(
						'transition-colors duration-300 hover:text-secondary_color md:text-lg'
						// {
						// 	'text-secondary_color':
						// 		isHovering || isHoveringSubMenu
						// }
					)}
				>
					{label}
				</button>
			) : (
				<Link
					className={cn(
						'transition-colors duration-300 hover:text-secondary_color md:text-lg',
						{
							'text-secondary_color':
								isHovering || isHoveringSubMenu
						}
					)}
					target={target !== undefined ? target : '_self'}
					href={href}
				>
					{label}
				</Link>
			)}

			{/* {label === 'PC' && (
				<NavigationChildren ref={subMenuRef} isMenu={isMenu} />
			)} */}
		</li>
	)
}
