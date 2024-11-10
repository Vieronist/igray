import { NavItem } from "@/entities/nav-item";

export const FooterNavigation = () => {
  return (
    <nav>
      <ul className="flex gap-[25px] mb-[80px]">
        <NavItem label={"Бонусы"} href={"#"} />
        <NavItem label={"Подарочный сертификат"} href={"#"} />
        <NavItem label={"О сервисе"} href={"#"} />
        <NavItem label={"Партнерам"} href={"#"} />
        <NavItem label={"Блог"} href={"#"} />
        <NavItem label={"Возврат"} href={"#"} />
        <NavItem label={"Вопросы"} href={"#"} />
        <NavItem label={"Контакты"} href={"#"} />
      </ul>
    </nav>
  );
};
