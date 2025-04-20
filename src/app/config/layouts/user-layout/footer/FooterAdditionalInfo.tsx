import { AdditionalInfo } from './AditionalInfoItem';

export const FooterAdditionalInfo = () => {
  const items = [
    { label: 'Контакты', href: '/contact' },
    { label: 'Политика конфиденциальности', href: '/privacy-policy' },
    { label: 'Условия использования', href: '/terms' },
  ];

  return (
    <ul className="w-full bg-transparent py-4 text-left text-sm flex flex-col md:flex-row justify-start items-center gap-x-5 md:gap-[24px]">
      <li className="text-gray-700">
        Copyright © 2024 Igray24. Все права защищены.
      </li>
      {items.map((item, idx) => (
        <AdditionalInfo href={item.href} label={item.label} key={idx} />
      ))}
    </ul>
  );
};
