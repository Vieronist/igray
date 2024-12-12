import Image from 'next/image'

import { FaqList } from '@/components/user/common/faq-list/FaqList'
import { SpeedPaymentBanner } from '@/components/user/common/steams/SpeedPaymentBanner'
import { SteamInfo } from '@/components/user/common/steams/SteamInfo'
import { Replenishment } from '@/components/user/common/steams/replenishment/Replenishment'
import { Breadcrumbs } from '@/components/user/ui/Breadcrumbs'
import { Container } from '@/components/user/ui/Container'

import { publicUrl } from '@/config/page-routes/public'

interface IArticle {
	content: string
	avatar: string
}

export default function HomePage() {
	const articles: IArticle[] = [
		{
			content: 'Как пополнить свой Steam бесплатно?',
			avatar: 'articles/img1.png'
		},
		{
			content: 'Что было на презентации Xbox 2024',
			avatar: 'articles/img2.png'
		},
		{
			avatar: 'articles/img3.png',
			content: 'Магический выживач Nightingale'
		}
	]

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

					<ul className='2xl:hidden flex flex-row overflow-x-auto gap-4 mx-auto max-w-[1000px] items-center'>
						{articles.map(article => (
							<li
								key={article.avatar}
								className='flex gap-4 flex-col md:flex-row justify-center items-center w-[307px] text-balance text-[16px] '
							>
								<div className='p-1 flex-shrink-0'>
									<Image
										className={'w-[96px] h-[96px]'}
										src={`/images/articles/${article.avatar}`}
										height={96}
										width={96}
										alt='icon'
									/>
								</div>

								<p className='w-[180px] lg:w-auto text-center md:text-left leading-5 font-medium text-base'>
									{article.content}
								</p>
							</li>
						))}
					</ul>
				</section>
			</div>
		</>
	)
}
