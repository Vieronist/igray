import { FaqList } from "@/features/faq";
import { SpeedPaymentBanner } from "@/features/payments";
import { ArticlesList } from "@/widgtes/articles";
import { Replenishment } from "@/widgtes/replenishment";
import { SteamInfo } from "@/widgtes/steam-info";

interface IArticle {
  content: string;
  avatar: string;
}

export const Home = () => {
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
    <main className="block 2xl:flex gap-[10px] justify-between mb-[40px] md:mb-[130px]">
      <SteamInfo />
      <Replenishment />
      <section>
        <SpeedPaymentBanner className="hidden 2xl:block" />
        <FaqList />
        <ArticlesList
          articles={articles}
          className="flex sm:justify-center md:justify-end overflow-x-auto whitespace-nowrap flex-shrink-0 xl:hidden mb-5"
        />
      </section>
    </main>
  );
};
