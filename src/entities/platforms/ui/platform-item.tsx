import Link from "next/link";
import { FC } from "react";

interface IProps {
  name: string;
  href: string;
}

export const PlatformItem: FC<IProps> = ({ name, href }) => {
  return (
    <li className="text-[14px] font-medium mb-[12px] text-gray-800 hover:text-gray-400 active:text-gray-400 transition-colors duration-300">
      <Link target="_blank" href={href}>{name}</Link>
    </li>
  );
};
