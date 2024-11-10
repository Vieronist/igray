import { SteamBanner } from "@/features/steam";
import { ArticlesList } from "@/widgtes/articles";

export const SteamInfo = () => {
  return (
    <section className="w-[490px]">
      <SteamBanner />
      <ArticlesList />
    </section>
  );
};
