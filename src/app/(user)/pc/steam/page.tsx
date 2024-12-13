import { FaqList } from '@/components/user/common/faq-list/FaqList'
import { NewsList } from '@/components/user/common/news/NewsList'
import { SpeedPaymentBanner } from '@/components/user/common/steams/SpeedPaymentBanner'
import { SteamInfo } from '@/components/user/common/steams/SteamInfo'
import { Replenishment } from '@/components/user/common/steams/replenishment/Replenishment'
import { Breadcrumbs } from '@/components/user/ui/Breadcrumbs'
import { Container } from '@/components/user/ui/Container'

import { publicUrl } from '@/config/page-routes/public'

import { news } from '@/constants/news'

export default function HomePage() {
	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'pc', href: publicUrl.pc() },
		{ label: 'steam', href: '' }
	]

	return (
		<>
			<Container>
				<Breadcrumbs breadcrumbs={breadcrumbs} />
			</Container>

			<div className='block 2xl:flex gap-[10px] justify-between mb-[40px] md:mb-[130px]'>
				<SteamInfo />
				<Replenishment />

				<section>
					<SpeedPaymentBanner className='hidden 2xl:block' />
					<FaqList />

					<NewsList items={news} className='2xl:hidden' />
				</section>
			</div>
		</>
	)
}
