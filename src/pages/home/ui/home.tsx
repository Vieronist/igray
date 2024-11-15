import { FaqList } from "@/features/faq";
import { SpeedPaymentBanner } from "@/features/payments";
import { ArticlesList } from "@/widgtes/articles";
import { Replenishment } from "@/widgtes/replenishment";
import { SteamInfo } from "@/widgtes/steam-info";

export const Home = () => {
  return (
    <main className="block 2xl:flex gap-[10px] justify-between">
      <SteamInfo />
      <Replenishment />
      <section>
        <SpeedPaymentBanner className="hidden 2xl:block" />
        <FaqList />
        <ArticlesList className="flex overflow-x-auto whitespace-nowrap flex-shrink-0 lg:hidden mb-5" />
      </section>
    </main>
  );
};
