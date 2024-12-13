import { Bonus } from '@/components/user/common/home/Bonus'
import { Sale } from '@/components/user/common/home/Sale'
import { OurProducts } from '@/components/user/common/home/our-products.tsx/OurProducts'
import { NewsList } from '@/components/user/common/news/NewsList'

import { news } from '@/constants/news'

export default function HomePage() {
	return (
		<div className='mt-10'>
			<div className='flex-col lg:flex-row gap-3 md:gap-10 lg:gap-3 flex xl:gap-2.5'>
				<Sale />
				<Bonus />
			</div>

			<NewsList className='my-10 lg:my-20' items={news} />

			<OurProducts className='my-10 lg:my-16' />
		</div>
	)
}
