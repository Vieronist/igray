import { FooterAdditionalInfo } from "@/features/footer";
import { FooterNavigation } from "@/features/navigation";
import { PlatformsList } from "@/features/platforms";
import { SearchPanel } from "@/features/search-panel";
import { SocialMediaList } from "@/features/social-media";

export const Footer = () => {
  return (
    <footer >
      <div className="gap-[30px] md:gap-[70px] flex flex-wrap md:flex-nowrap w-full">
        <div className="w-full md:w-[45%] lg:w-[25%]">
          <SearchPanel classNameDiv="bg-transparent h-[52px] px-[25px] w-full flex gap-[15px] items-center md:mb-5" />
          <SocialMediaList className="hidden md:grid gap-y-2 gap-x-8 md:gap-x-[10px]" />
        </div>
        <div>
          <FooterNavigation />
          <div className="flex gap-[65px] flex-wrap mb-[44px] md:mb-0">
            <PlatformsList
              title="Играй"
              options={["PC", "Xbox", "PlayStation", "Nintendo", "Mobile"]}
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
          <SocialMediaList className="grid md:hidden w-[350px] gap-y-2 mx-auto mb-2" />
        </div>
      </div>
      <FooterAdditionalInfo />
    </footer>
  );
};
