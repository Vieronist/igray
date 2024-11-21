import { ArticlesList } from "@/widgtes/articles";
import { Footer } from "@/widgtes/footer";
import { Header } from "@/widgtes/header";
import { ReturnConditions, WhereICanGetBackMoney, WhyWeCantReturn } from "@/widgtes/return/";
import { Reviews } from "@/widgtes/reviews";
import React from "react";

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
      <ReturnConditions />
      <WhyWeCantReturn />
      <WhereICanGetBackMoney/>
      <ArticlesList
        articles={articles}
        className="flex mb-[120px] overflow-x-auto"
      />
      <Reviews />
      <Footer />
    </div>
  );
}
