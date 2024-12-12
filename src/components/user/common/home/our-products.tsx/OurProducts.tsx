import { cn } from '@/utils/clsx'

import { AllPlaystation } from './AllPlaystation'
import { AllXBox } from './AllXBox'
import { DepositsAndSubscriptions } from './DepositsAndSubscriptions'
import { GamesAndApplications } from './GamesAndApplications/GamesAndApplications'
import { MobileServices } from './MobileServices'
import { OurProductionsHeader } from './OurProductionsHeader'

interface OurProductsProps {
	className?: string
}

export const OurProducts = (props: OurProductsProps) => {
	const { className } = props

	return (
		<div
			className={cn(
				'rounded-xl_1 xl:rounded-xl_2 pt-7 pb-2.5 lg:py-14 px-2.5  lg:px-14 bg-white min-h-size_2',
				className
			)}
		>
			<div className='lg:flex gap-2.5'>
				<div className='mb-2.5 xl_1:mb-0 lg:flex lg:flex-col lg:flex-shrink-0  lg:w-1/2 xl_1:w-[650px] gap-2.5'>
					<OurProductionsHeader />

					<GamesAndApplications className='hidden lg:block' />

					<GamesAndApplications
						className='lg:hidden xl_1:hidden'
						isMobile={true}
					/>

					{/* Десктопная версия */}
					<DepositsAndSubscriptions className='lg:mb-0 hidden lg:block' />
				</div>

				<div
					className={
						'flex lg:flex-col gap-2.5 mb-2.5 xl_1:mb-0 lg:w-full xl_1:w-[320px]'
					}
				>
					<AllPlaystation className='lg:h-[50%]' />
					<AllXBox className='lg:h-[50%]' />
				</div>

				{/* Десктопная версия */}
				<MobileServices className='hidden xl_1:flex flex-col justify-end xl_1:w-[320px]' />
			</div>

			{/* Мобильная версия */}
			<DepositsAndSubscriptions className='mb-2.5 lg:mb-0 lg:hidden' />

			{/* Мобильная версия  */}
			<MobileServices className='xl_1:hidden' />
		</div>
	)
}
