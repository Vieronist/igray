import { FooterNavigation } from "@/features/navigation";
import { PlatformsList } from "@/features/platforms";
import { SearchPanel } from "@/features/search-panel";
import { SocialMediaList } from "@/features/social-media";

export const Footer = () => {
  return (
    <footer className="px-[60px] gap-[70px] flex">
      <div className="w-[25%]">
        <SearchPanel className="bg-transparent py-[20px] px-[20px] w-full  mb-[60px]" />
        <SocialMediaList />
      </div>
      <div>
        <FooterNavigation />
        <div className="flex gap-[60px] flex-wrap">
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
