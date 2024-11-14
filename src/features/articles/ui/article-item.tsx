import Image from "next/image";
import { FC } from "react";

interface IProps {
  content: string;
  avatar: string;
}

export const ArticleItem: FC<IProps> = ({ content, avatar }) => {
  return (
    <li className="flex items-center w-[280px] text-balance text-[16px] ">
      <Image
        className=""
        src={`/${avatar}`}
        height={80}
        width={80}
        alt="icon"
      />
      <p className="w-[180px] text-gray-800">{content}</p>
    </li>
  );
};
