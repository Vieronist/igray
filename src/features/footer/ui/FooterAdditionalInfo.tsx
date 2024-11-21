import { AdditionalInfo } from "@/entities/additionalInfo";

export const FooterAdditionalInfo = () => {
  const items = [
    "Copyright © 2024 GameShop. Все права защищены.",
    "Контакты",
    "Политика конфиденциальности",
    "Условия использования",
  ];

  return (
    <ul className="flex gap-x-5 md:gap-[24px] flex-wrap">
      {items.map((item, idx) => (
        <AdditionalInfo href="#" label={item} key={idx} />
      ))}
    </ul>
  );
};
