import { cn } from '@/utils/clsx'

interface OurProductionsHeaderProps {
	className?: string
}

export const OurProductionsHeader = (props: OurProductionsHeaderProps) => {
	const { className } = props

	return (
		<div className={cn('px-7 mb-6', className)}>
			<p
				className={
					'mb-6 text-secondary_color text-sm lg:text-base font-medium'
				}
			>
				Возможности
			</p>
			<h1
				className={
					'font-steppe text-xl_2 lg:text-xl_3 font-extrabold leading-[1.1]'
				}
			>
				Наши продукты
			</h1>
		</div>
	)
}
