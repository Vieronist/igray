import Image from 'next/image'

import { TopBannerServices } from '@/components/user/common/about-services/TopBannerServices'
import { AdvantageCard } from '@/components/user/common/advantage-card/AdvantageCard'
import { ContactsPanel } from '@/components/user/common/contacts/ContactsPanel'
import { NewsList } from '@/components/user/common/news/NewsList'
import { OurProducts } from '@/components/user/common/our-products/OurProducts'
import { Box } from '@/components/user/ui/Box'
import { Breadcrumbs } from '@/components/user/ui/Breadcrumbs'
import { Container } from '@/components/user/ui/Container'
import { Heading } from '@/components/user/ui/Heading'

import { publicUrl } from '@/config/page-routes/public'

import { advantageServices } from '@/constants/advantage'
import { news } from '@/constants/news'

export default function ContactsPage() {
	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'о сервисе', href: '' }
	]

	return (
		<>
			<Container>
				<Breadcrumbs breadcrumbs={breadcrumbs} />
			</Container>

			<TopBannerServices className='mb-2.5 sm:mb-10 lg:mb-16' />

			<Container className='mb-2.5 sm:mb-10 lg:mb-16'>
				<div className='grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4'>
					{advantageServices.map(service => (
						<AdvantageCard
							key={service.title}
							title={service.title}
							description={service.description}
							icon={service.icon}
						/>
					))}
				</div>
			</Container>

			<Box className='mb-2.5 sm:mb-10 lg:mb-16'>
				<div className='lg:flex items-center lg:gap-8 xl:gap-10 xl_1:gap-28'>
					<div className='w-full lg:max-w-[480px] xl:max-w-[540px] xl_1:max-w-[590px] flex-shrink-0'>
						{/* max-w-[590px] */}
						<Image
							className='rounded-xl_3  overflow-hidden w-full'
							alt='Важная информация'
							width={350}
							height={196}
							src={
								'/images/about-services/important-information.jpg'
							}
						/>
					</div>

					<div className='px-2 xs:px-5 lg:px-0 mt-12 lg:mt-0'>
						<Heading className='mb-7' level={2} size='lg'>
							<span className='text-secondary_color'>
								Самое важное,
							</span>
							<br />
							что нужно про нас знать
						</Heading>

						<p className='text-xl'>
							Надоело покупать игры и подписки по конским
							ценам? Магазин X-GameShop готов предложить Вам
							помощь в покупке, с минимальной наценкой Мы поможем
							вам приобрести лицензионные игры и подписки
						</p>
					</div>
				</div>
			</Box>

			<OurProducts
				className='mb-2.5 sm:mb-10 lg:mt-16'
				title='Вперед за покупками!'
				supTitle='Наши продукты'
			/>

			<div className='p-2.5 xs:p-7 lg:p-10 xl_1:p-16 rounded-2xl xs:rounded-xl_1 xl_1:rounded-xl_2 border mb-28 xl:mb-24'>
				<Heading className='mb-5' level={3} size='sm'>
					Наши контакты
				</Heading>

				<ContactsPanel />
			</div>

			<NewsList items={news} />
		</>
	)
}
