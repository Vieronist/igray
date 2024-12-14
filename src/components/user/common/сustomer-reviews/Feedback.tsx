import Image from 'next/image'

import { cn } from '@/utils/clsx'

interface FeedbackProps {
	userName: string
	date: string
	text: string
	className?: string
}

export const Feedback = (props: FeedbackProps) => {
	const { date, text, userName, className } = props

	return (
		<div
			className={cn(
				'py-7 px-5 lg:px-10 rounded-xl_3 cursor-pointer bg-white',
				className
			)}
		>
			<div className='flex items-center w-full mb-6'>
				<div className='flex gap-3 sm:w-[50%]'>
					<Image
						width={36}
						height={36}
						alt='logo'
						src={'/images/user-logo-mini.png'}
						className='object-contain rounded-full'
					/>

					<div>
						<span className='text-gray_color text-xl_6 block'>
							{date}
						</span>
						<span className='font-medium block'>{userName}</span>
					</div>
				</div>
				<div className='flex ml-auto'>
					<Image
						alt='star'
						src='/images/star.png'
						width={16}
						height={16}
						className='w-4 h-4 lg:w-6 lg:h-6'
					/>

					<Image
						alt='star'
						src='/images/star.png'
						width={16}
						height={16}
						className='w-4 h-4 lg:w-6 lg:h-6'
					/>
					<Image
						alt='star'
						src='/images/star.png'
						width={16}
						height={16}
						className='w-4 h-4 lg:w-6 lg:h-6'
					/>
					<Image
						alt='star'
						src='/images/star.png'
						width={16}
						height={16}
						className='w-4 h-4 lg:w-6 lg:h-6'
					/>
					<Image
						alt='star'
						src='/images/star.png'
						width={16}
						height={16}
						className='w-4 h-4 lg:w-6 lg:h-6'
					/>
				</div>
			</div>
			<p className='font-steppe text-xl md:text-3xl font-normal leading-[1.2] max-w-[465px] w-full md:max-w-[460px]'>
				{text}
			</p>
		</div>
	)
}
