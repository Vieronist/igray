import { publicUrl } from '@/app/config/routes/page-routes/public'

import { FaqList } from '@/components/user/common/faq-list/FaqList'
import { SpeedPaymentBanner } from '@/components/user/common/steams/SpeedPaymentBanner'
import { SteamInfo } from '@/components/user/common/steams/SteamInfo'
import { Replenishment } from '@/components/user/common/steams/replenishment/Replenishment'

import { NewsList } from '@/elements/news/ui/NewsList'

import { Breadcrumbs } from '@/shared/ui/Breadcrumbs'
import { Container } from '@/shared/ui/Container'

export default function SteamPage() {
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

					<NewsList className='2xl:hidden' />
				</section>
			</div>
		</>
	)
}
