import { Bonus } from '@/components/user/common/home/Bonus'
import { Sale } from '@/components/user/common/home/Sale'
import { NewsList } from '@/components/user/common/news/NewsList'
import { OurProducts } from '@/components/user/common/our-products/OurProducts'

import { news } from '@/constants/news'

export default function HomePage() {
	return (
		<div className='mt-10'>
			<div className='flex-col lg:flex-row gap-3 md:gap-10 lg:gap-3 flex xl:gap-2.5'>
				<Sale />
				<Bonus />
			</div>

			<NewsList className='my-10 lg:my-20' items={news} />

			<OurProducts
				title='Наши продукты'
				supTitle='Возможности'
				className='my-10 lg:my-16'
			/>
		</div>
	)
}
