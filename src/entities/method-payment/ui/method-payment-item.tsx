import Link from "next/link";
import { FC } from "react";
import { ReactSVG } from "react-svg";

interface IProps {
  svg: string;
  text: string;
  title: string;
}

export const MethodPaymentItem: FC<IProps> = ({ svg, text, title }) => {
  return (
    <li className="border-[#1F3238] border rounded-[18px] p-[12px] flex-1 text-center">
      <Link href={"#"}>
        <ReactSVG src={svg} className="flex flex-col items-center" />
        <h5>{title}</h5>
        <p className="text-[12px] font-medium text-center text-[#AFC5BE]">{text}</p>
      </Link>
    </li>
  );
};
