import { FaqList } from "@/features/faq";
import { SpeedPaymentBanner } from "@/features/payments";
import { Replenishment } from "@/widgtes/replenishment";
import { SteamInfo } from "@/widgtes/steam-info";

export const Home = () => {
  return (
    <main className="flex gap-[10px]">
      <SteamInfo />
      <Replenishment />
      <section>
        <SpeedPaymentBanner />
        <FaqList />
      </section>
    </main>
  );
};
