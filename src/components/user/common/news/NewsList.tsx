import { type News } from '@/constants/news'

import { cn } from '@/utils/clsx'

import { Container } from '../../ui/Container'

import { NewsItem } from './NewsItem'

interface NewsListProps {
	items: News[]
	className?: string
}

export const NewsList = (props: NewsListProps) => {
	const { items, className } = props

	return (
		<Container>
			<ul
				className={cn(
					'flex flex-row gap-1 lg:gap-4 mx-auto items-star max-w-[1311px] w-full overflow-x-auto',
					className
				)}
			>
				{items?.map(article => (
					<NewsItem
						key={article.content}
						content={article.content}
						avatar={article.avatar}
					/>
				))}
			</ul>
		</Container>
	)
}
