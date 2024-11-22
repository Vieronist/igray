import Link from "next/link";
import { FC } from "react";
import { ReactSVG } from "react-svg";
import Image from "next/image";

interface IProps {
  path: string;
  href: string;
}

export const MarketplaceItem: FC<IProps> = ({ path, href }) => {
  return (
    <li className="bg-[white] h-[155px] w-[170px] md:w-[210px] px-[21px] py-[36px] rounded-[34px] flex flex-col items-center justify-between">
      {href.endsWith(".svg") ? (
        <ReactSVG src={path} height={30} width={130} className="mb-[18px]" />
      ) : (
        <Image
          width={120}
          height={30}
          alt="logo"
          src={`/${path}`}
          className="mb-[18px]"
        />
      )}

      <div>
        <p className="text-center">
          {path === "vk-full.svg" ? "7 921 подписчик" : "каталог"}
        </p>
        <Link
          className="text-center text-[#4FCA9C] text-[16px] block"
          href={href}
        >
          Смотреть
        </Link>
      </div>
    </li>
  );
};
