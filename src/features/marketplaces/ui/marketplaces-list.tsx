import { MarketplaceItem } from "@/entities/marketplace";

export const MarketplacesList = () => {
  const marketplaces = [
    "avito-full.svg",
    "yandex-market-full.svg",
    "vk-full.svg",
    "wb-digital.png",
    "playerok-full.svg",
    "wb-full.svg",
  ];

  return (
    <ul className="grid grid-rows-3 grid-cols-2 sm:grid-cols-3 gap-[10px] mx-auto">
      {marketplaces.map((path, idx) => (
        <MarketplaceItem
          key={idx}
          path={path}
          href={`${path}`}
        />
      ))}
    </ul>
  );
};
