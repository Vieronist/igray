import Link from "next/link";
import { FC } from "react";
import { ReactSVG } from "react-svg";

interface IProps {
  path: string;
  href: string
}

export const ContactItem: FC<IProps> = ({ path, href }) => {
  return (
    <li className="p-[15px] border-[#DDF1EA] border rounded-[18px] ">
      <Link href={href}>
      <ReactSVG src={path} height={18} width={18} />
      </Link>
    </li>
  );
};
