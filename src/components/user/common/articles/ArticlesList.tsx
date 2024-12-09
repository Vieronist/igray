import { FC } from 'react'

import { cn } from '@/utils/clsx'

import { ArticleItem } from './ArticleItem'

interface IArticle {
	content: string
	avatar: string
}

interface IProps {
	className: string
	articles: IArticle[]
}

export const ArticlesList: FC<IProps> = ({ className, articles }) => {
	return (
		<>
			<ul
				className={cn(
					'flex gap-4 flex-row overflow-scroll md:flex-row justify-center items-center  text-balance text-[16px] w-full',
					className
				)}
			>
				{articles?.map((article, idx) => (
					<ArticleItem
						content={article.content}
						avatar={article.avatar}
						key={idx}
					/>
				))}
			</ul>
		</>
	)
}
