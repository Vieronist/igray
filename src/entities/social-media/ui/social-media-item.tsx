import { FC } from "react";
import { ReactSVG } from "react-svg";
import Link from "next/link"


interface IProps {
  svg: string;
  name: string;
  href: string
}

export const SocialMediaItem: FC<IProps> = ({ svg, name, href }) => {
  return (
    <li className="h-[80px] w-[80px] justify-self-center p-[5px] bg-white flex items-center justify-center content-center rounded-[24px]">
      <Link className="flex flex-col items-center">
        <ReactSVG className="mb-[15px]" src={`/${svg}`} />
        <p className="text-center text-[12px] text-gray-800">{name}</p>
      </Link>
    </li>
  );
};
