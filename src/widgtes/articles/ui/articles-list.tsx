import { ArticleItem } from "@/features/articles";
import { FC } from "react";

interface IArticle {
  content: string;
  avatar: string;
}

interface IProps {
  className: string;
}

export const ArticlesList: FC<IProps> = ({ className }) => {
  const articles: IArticle[] = [
    {
      content: "Как пополнить свой Steam бесплатно?",
      avatar: "gabe.png",
    },
    {
      content: "Что было на презентации Xbox 2024",
      avatar: "someone.png",
    },
    {
      avatar: "dracon.png",
      content: "Магический выживач Nightingale",
    },
  ];

  return (
    <ul
      className={`pl-[60px] py-[60px] max-w-[1055px] rounded-[40px] border-[#1F3238] border border-opacity-10 ${className}  `}
    >
      {articles.map((article, idx) => (
        <ArticleItem
          content={article.content}
          avatar={article.avatar}
          key={idx}
        />
      ))}
    </ul>
  );
};
