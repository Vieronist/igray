'use client'

import Link from 'next/link'

import { publicUrl } from '@/config/page-routes/public'

import { useServiceStore } from '@/store/service.store'

import { cn } from '@/utils/clsx'

import styles from './ProductMenu.module.css'

interface ProductMenuProps {
	className?: string
}

export const ProductMenu = (props: ProductMenuProps) => {
	const { className } = props
	const { setIsModalVisible } = useServiceStore()

	const handleClick = () => {
		setIsModalVisible(true)
	}

	return (
		<ul className={cn(styles.list, className)}>
			<li className={styles.listItem}>
				<Link className={cn(styles.link)} href={publicUrl.steam()}>
					Steam
				</Link>
			</li>

			<li className={styles.listItem}>
				<div className={cn(styles.link)}>
					<p>Battle NET</p>

					<ul className={styles.subList}>
						<li>
							<Link
								className={cn(styles.subLink)}
								href='#'
								onClick={handleClick}
							>
								Blizzard
							</Link>
						</li>

						<li>
							<Link
								className={cn(styles.subLink)}
								href='#'
								onClick={handleClick}
							>
								Игровое Время
							</Link>
						</li>
					</ul>
				</div>
			</li>

			<li className={styles.listItem}>
				<Link
					className={cn(styles.link)}
					href='#'
					onClick={handleClick}
				>
					Epic Games
				</Link>
			</li>

			<li className={styles.listItem}>
				<Link
					className={cn(styles.link)}
					href='#'
					onClick={handleClick}
				>
					Microsoft Office
				</Link>
			</li>

			<li className={styles.listItem}>
				<Link
					className={cn(styles.link)}
					href='#'
					onClick={handleClick}
				>
					Windows
				</Link>
			</li>
		</ul>
	)
}

ProductMenu.displayName = 'ProductMenu'
