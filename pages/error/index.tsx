import { ArticlesList } from "@/widgtes/articles";
import { ErrorPanel } from "@/widgtes/error";
import { Footer } from "@/widgtes/footer";
import { Header } from "@/widgtes/header";
import { Reviews } from "@/widgtes/reviews";

interface IArticle {
  content: string;
  avatar: string;
}

export default function Index() {
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
    {
      avatar: "baba-v-shlyape.png",
      content: "Foamstars выйдет 6 февраля",
    },
    {
      avatar: "overwatch-baba.png",
      content: "Чарт продаж Steam захватили фритуплей",
    },
  ];

  return (
    <div>
      <Header />
      <ErrorPanel />
      <ArticlesList
        articles={articles}
        className="hidden xl:flex justify-center mb-[120px] mx-auto"
      />
      <Reviews className="hidden xl:block" />
      <Footer />
    </div>
  );
}
