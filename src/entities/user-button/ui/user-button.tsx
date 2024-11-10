import Link from "next/link";
import { FC } from "react";
import { ReactSVG } from "react-svg";

interface IProps {
  path: string;
}

export const UserButton: FC<IProps> = ({ path }) => (
  <li className="block p-[17px] rounded-[18px] bg-gradient-to-r from-[#E4FAF3] via-[rgba(228,250,243,0.29)] to-[#E4FAF3]">
    <Link href="#">
      <ReactSVG src={path} />
    </Link>
  </li>
);
