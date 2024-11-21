import { ArticlesList } from "@/widgtes/articles";
import { Footer } from "@/widgtes/footer";
import { Header } from "@/widgtes/header";
import { ReturnGoodsPanel } from "@/widgtes/return-goods";
import { Reviews } from "@/widgtes/reviews";

export default function ReturnGoods() {
  return (
    <>
      <Header />
      <ReturnGoodsPanel />
      <ArticlesList className="hidden xl:flex justify-center mb-[120px] mx-auto" />
      <Reviews />
      <Footer />
    </>
  );
}
