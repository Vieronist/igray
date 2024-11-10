import { ArticleItem } from "@/features/articles";

interface IArticle {
  content: string;
  avatar: string;
}

export const ArticlesList = () => {
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
    <ul className="p-[58px] rounded-[40px] border-[#1F3238] border border-opacity-10">
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
