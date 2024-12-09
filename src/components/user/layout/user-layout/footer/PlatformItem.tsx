import Link from 'next/link'
import { FC } from 'react'

interface IProps {
	name: string
	href: string
	onClick: (href: string) => void
}

export const PlatformItem: FC<IProps> = ({ name, href, onClick }) => {
	return (
		<li
			onClick={() => onClick(href)}
			className='text-[14px] text-primary_color font-medium hover:text-secondary_color active:text-secondary_color transition-colors duration-300'
		>
			{href === '#' ? (
				<button>{name}</button>
			) : (
				<Link
					target={href === '#' ? '_self' : '_blank'}
					href={href === '#' ? '' : href}
				>
					{name}
				</Link>
			)}
		</li>
	)
}