'use client'

import Link from 'next/link'
import { ForwardedRef, forwardRef } from 'react'

import { cn } from '@/utils/clsx'

import styles from './NavigationChildren.module.scss'

interface NavigationChildrenProps {
	className?: string
	isMenu: boolean
}

export const NavigationChildren = forwardRef(
	(props: NavigationChildrenProps, ref: ForwardedRef<HTMLUListElement>) => {
		const { className, isMenu } = props

		return (
			<ul
				ref={ref}
				className={cn(styles.list, className, {
					hidden: !isMenu
				})}
			>
				<li className={styles.listItem}>
					<Link className={cn(styles.link)} href='#'>
						Steam
					</Link>
				</li>

				<li className={styles.listItem}>
					<button className={cn(styles.link)} type='button'>
						<p>Battle NET</p>

						<ul className={styles.subList}>
							<li>
								<Link className={cn(styles.subLink)} href='#'>
									Blizzard
								</Link>
							</li>

							<li>
								<Link className={cn(styles.subLink)} href='#'>
									Игровое Время
								</Link>
							</li>
						</ul>
					</button>
				</li>

				<li className={styles.listItem}>
					<Link className={cn(styles.link)} href='#'>
						Epic Games
					</Link>
				</li>

				<li className={styles.listItem}>
					<Link className={cn(styles.link)} href='#'>
						Microsoft Office
					</Link>
				</li>

				<li className={styles.listItem}>
					<Link className={cn(styles.link)} href='#'>
						Windows
					</Link>
				</li>
			</ul>
		)
	}
)

NavigationChildren.displayName = 'NavigationChildren'
