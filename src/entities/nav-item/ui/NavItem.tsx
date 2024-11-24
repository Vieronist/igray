import Link from "next/link";
import { FC } from "react";

interface IProps {
  label: string;
  href: string;
  className?:string
}


export const NavItem: FC<IProps> = ({ label, href, className }) => {
  return (
    <li className={`text-[18px] sm:text-[18px] z-10 text-gray-800 ${className}`}>
      <Link target="_blank" href={href}>{label}</Link>
    </li>
  );
};
