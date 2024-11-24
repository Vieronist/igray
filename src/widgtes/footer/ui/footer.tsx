import { FooterAdditionalInfo } from "@/features/footer";
import { FooterNavigation } from "@/features/navigation";
import { PlatformsList } from "@/features/platforms";
import { SearchPanel } from "@/features/search-panel";
import { SocialMediaList } from "@/features/social-media";

export const Footer = () => {
  return (
    <footer>
      <div className="gap-[30px] md:gap-[70px] flex flex-wrap md:flex-nowrap w-full">
        <div className="w-full md:w-[45%] lg:w-[25%]">
          <SearchPanel classNameDiv="bg-transparent h-[52px] px-[25px] w-full flex gap-[15px] items-center md:mb-5" />
          <SocialMediaList className="hidden md:grid gap-y-2 gap-x-8 md:gap-x-[10px]" />
        </div>
        <div className="mx-auto">
          <FooterNavigation />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-[25px] md:gap-[65px] mb-[44px] ">
            <PlatformsList
              title="Играй"
              options={[
                "Бонусы",
                "О сервисе",
                "Партнерам",
                "Блог",
                "Возврат",
                "Вопросы",
                "Контакты",
              ]}
              hrefs={["#", "#", "#", "#", "#","#", "/contacts"]}
              className="block md:hidden"
            />
            <PlatformsList
              title="PC"
              hrefs={["/", "#", "#", "#", "#"]}
              options={[
                "Steam",
                "Battle NET",
                "Epic Games",
                "Microsoft Office",
                "Windows",
              ]}
            />
            <PlatformsList
              hrefs={["#", "#", "#", "#"]}
              title="Xbox"
              options={["Игры", "Подписки", "Консоли", "Аксессуары"]}
            />
            <PlatformsList
              hrefs={["#", "#", "#", "#"]}
              title="PlayStation"
              options={["Игры", "Подписки", "Консоли", "Аксессуары"]}
            />

            <PlatformsList
              hrefs={["#", "#"]}
              title="Nintendo"
              options={["Пополнение кошелька", "Подписки"]}
            />
            <PlatformsList
              hrefs={["#"]}
              title="Mobile"
              options={["Apple Itunes"]}
            />
          </div>
          <SocialMediaList className="grid md:hidden w-[350px] gap-y-4 mx-auto mb-2 md:mb-0 md:gap-3" />
        </div>
      </div>
      <FooterAdditionalInfo />
    </footer>
  );
};
