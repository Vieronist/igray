import Image from 'next/image'

import { ContactsPanel } from '@/components/user/common/contacts/ContactsPanel'
import { Breadcrumbs } from '@/components/user/ui/Breadcrumbs'
import { Container } from '@/components/user/ui/Container'

import { publicUrl } from '@/config/page-routes/public'

import { cn } from '@/utils/clsx'

interface IArticle {
	content: string
	avatar: string
}

export default function ContactsPage() {
	const articles: IArticle[] = [
		{
			content: 'Как пополнить свой Steam бесплатно?',
			avatar: 'images/articles/img1.png'
		},
		{
			content: 'Что было на презентации Xbox 2024',
			avatar: 'images/articles/img2.png'
		},
		{
			avatar: 'images/articles/img3.png',
			content: 'Магический выживач Nightingale'
		},
		{
			avatar: 'images/articles/img4.png',
			content: 'Foamstars выйдет 6 февраля'
		},
		{
			avatar: 'images/articles/img5.png',
			content: 'Чарт продаж Steam захватили фритуплей'
		}
	]

	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'контакты', href: '' }
	]

	return (
		<Container>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<ContactsPanel />

			<ul
				className={cn(
					'flex flex-row gap-4 mx-auto items-start mb-6 w-full overflow-x-auto xl:mb-16'
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

						<p className='w-[180px] lg:w-auto text-center md:text-left font-medium text-base'>
							{article.content}
						</p>
					</li>
				))}
			</ul>
		</Container>
	)
}
