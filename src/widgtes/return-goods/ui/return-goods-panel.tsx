import { Contacts } from "@/features/contacts";
import { MarketplacesList } from "@/features/marketplaces";



export const ReturnGoodsPanel = () => {
  return (
    <section className="mb-[50px] xl:mb-[120px]">
      <h3 className="font-extrabold text-[36px] sm:text-[46px] text-center xl:text-left mb-[27px] text-gray-800">Наши контакты</h3>
      <div className="flex gap-2 flex-wrap">
        <div className="flex gap-2 flex-wrap flex-col md:flex-row mx-auto xl:w-[51%]">
          <Contacts
            title="Заказы"
            phone="+7 919 346-11-58"
            schedule="Пн - Вс:с 9:00-23:00 по МСК"
            email="igraem247@gmail.com"
            svgs={["vk.svg", "tg.svg"]}
          />
          <Contacts
            title="Сотрудничество"
            phone="+7 919 346-11-58"
            schedule="Пн - Вс:с 9:00-23:00 по МСК"
            email="igraem247@gmail.com"
            svgs={["tg.svg"]}
          />
        </div>
        <MarketplacesList />
      </div>
    </section>
  );
};
