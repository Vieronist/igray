import { ArticleItem } from "@/features/articles";
import { FC } from "react";

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
    <ul className={`flex p-[60px] rounded-[40px] border-[#1F3238] sm:border border-opacity-10  ${className}`}>
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
