import Image from 'next/image'

import { Bonus } from '@/components/user/common/home/Bonus'
import { Sale } from '@/components/user/common/home/Sale'
import { OurProducts } from '@/components/user/common/home/our-products.tsx/OurProducts'

import { articles } from '@/constants/articles'

import { cn } from '@/utils/clsx'

export default function HomePage() {
	return (
		<div className='mt-10'>
			<div className='flex-col lg:flex-row gap-3 md:gap-10 lg:gap-3 flex xl:gap-2.5'>
				<Sale />
				<Bonus />
			</div>

			<ul
				className={cn(
					'my-10 lg:my-20 flex flex-row gap-1 lg:gap-4 mx-auto items-star max-w-[1311px] w-full overflow-x-auto'
				)}
			>
				{articles?.map(article => (
					<li
						key={article.content}
						className='flex gap-4 flex-col md:flex-row justify-center items-center max-w-[240px] text-balance text-[16px] '
					>
						<div className='p-1 flex-shrink-0'>
							<Image
								className={
									'w-[96px] h-[96px] lg:w-[76px] lg:h-[76px]'
								}
								src={`/${article.avatar}`}
								height={96}
								width={96}
								alt='icon'
							/>
						</div>

						<p className='w-[180px] lg:w-auto text-center md:text-left font-medium text-base leading-[1.2]'>
							{article.content}
						</p>
					</li>
				))}
			</ul>

			<OurProducts className='my-10 lg:my-16' />
		</div>
	)
}
