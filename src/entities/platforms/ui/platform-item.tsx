import Link from "next/link";
import { FC } from "react";

interface IProps {
  name: string;
  href: string;
}

export const PlatformItem: FC<IProps> = ({ name, href }) => {
  return (
    <li className="text-[14px] font-medium mb-[12px] text-gray-800">
      <Link target="_blank" href={href}>{name}</Link>
    </li>
  );
};
