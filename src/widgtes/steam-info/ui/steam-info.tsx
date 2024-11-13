import { SpeedPaymentBanner } from "@/features/payments";
import { SteamBanner } from "@/features/steam";
import { ArticlesList } from "@/widgtes/articles";

export const SteamInfo = () => {
  return (
    <section className="w-full flex justify-between 2xl:block 2xl:w-[370px] gap-[5px] 2xl:gap-0 ">
      <div className="flex gap-[5px] mx-auto ">
        <SteamBanner />
        <SpeedPaymentBanner className="hidden md:block 2xl:hidden" />
      </div>
      <ArticlesList />
    </section>
  );
};
