import { SpeedPaymentBanner } from "@/features/payments";
import { SteamBanner } from "@/features/steam";
import { ArticlesList } from "@/widgtes/articles";

export const SteamInfo = () => {
  return (
    <section className="flex justify-center 2xl:block gap-[5px] 2xl:gap-0 ">
      <div className="flex gap-3 items-center md:mx-auto ">
        <SteamBanner />
        <SpeedPaymentBanner className="hidden md:block 2xl:hidden" />
      </div>
      <ArticlesList className="hidden 2xl:block" />
    </section>
  );
};
