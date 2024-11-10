import Link from "next/link";
import { FC } from "react";

interface IProps {
  label: string;
  href: string;
}

export const NavItem: FC<IProps> = ({ label, href }) => {
  return (
    <li className="text-[22px]">
      <Link href={href}>{label}</Link>
    </li>
  );
};
