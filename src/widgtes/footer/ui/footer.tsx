import { FooterNavigation } from "@/features/navigation";
import { PlatformsList } from "@/features/platforms";
import { SearchPanel } from "@/features/search-panel";
import { SocialMediaList } from "@/features/social-media";

export const Footer = () => {
  return (
    <footer className="gap-[30px] md:gap-[70px] flex flex-wrap md:flex-nowrap px-5 w-full">
      <div className="w-full md:w-[45%] lg:w-[25%]">
        <SearchPanel classNameDiv="bg-transparent h-[52px] px-[25px] w-full flex gap-[15px] items-center md:mb-5" />
        <SocialMediaList  />
      </div>
      <div>
        <FooterNavigation />
        <div className="flex gap-[60px] flex-wrap">
        <PlatformsList
            title="Играй"
            options={["PC","Xbox","PlayStation","Nintendo","Mobile"]}
            className="block md:hidden"
          />
          <PlatformsList
            title="PC"
            options={[
              "Steam",
              "Battle NET",
              "Epic Games",
              "Microsoft Office",
              "Windows",
            ]}
          />
          <PlatformsList
            title="Xbox"
            options={["Игры", "Подписки", "Консоли", "Аксессуары"]}
          />
          <PlatformsList
            title="PlayStation"
            options={["Игры", "Подписки", "Консоли", "Аксессуары"]}
          />

          <PlatformsList
            title="Nintendo"
            options={["Пополнение кошелька", "Подписки"]}
          />
          <PlatformsList title="Mobile" options={["Apple Itunes"]} />
        </div>
      </div>
    </footer>
  );
};
