import { FC } from "react";
import { ArticleItem } from "./article-item";

interface IArticle {
	content: string;
	avatar: string;
}

interface IProps {
	className: string;
	articles: IArticle[];
}

export const ArticlesList: FC<IProps> = ({ className, articles }) => {
	return (
		<ul
			className={`xl:space-y-5 flex items-enter gap-4 text-left p-[60px]  rounded-[40px] border-[#1f3238] sm:border border-opacity-10  ${className}`}
		>
			{articles?.map((article, idx) => (
				<ArticleItem
					content={article.content}
					avatar={article.avatar}
					key={idx}
				/>
			))}
		</ul>
	);
};
