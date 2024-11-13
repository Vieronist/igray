import { FaqList } from "@/features/faq";
import { SpeedPaymentBanner } from "@/features/payments";
import { Replenishment } from "@/widgtes/replenishment";
import { SteamInfo } from "@/widgtes/steam-info";

export const Home = () => {
  return (
    <main className="block 2xl:flex gap-[10px]">
      <SteamInfo />
      <Replenishment />
      <section>
        <SpeedPaymentBanner className="md:hidden 2xl:block" />
        <FaqList />
      </section>
    </main>
  );
};
