import Image from 'next/image'

import { ContactsPanel } from '@/components/user/common/contacts/ContactsPanel'

import { cn } from '@/utils/clsx'

interface IArticle {
	content: string
	avatar: string
}

export default function ContactsPage() {
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
		},
		{
			avatar: 'articles/img4.png',
			content: 'Foamstars выйдет 6 февраля'
		},
		{
			avatar: 'articles/img5.png',
			content: 'Чарт продаж Steam захватили фритуплей'
		}
	]

	return (
		<>
			<ContactsPanel />

			<ul
				className={cn(
					'flex flex-row gap-4 mx-auto items-start mb-6 max-w-[1311px] w-full overflow-x-auto'
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
		</>
	)
}
