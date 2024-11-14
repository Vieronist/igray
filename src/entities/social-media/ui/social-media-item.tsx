import { FC } from "react";
import { ReactSVG } from "react-svg";

interface IProps {
  svg: string;
  name: string;
}

export const SocialMediaItem: FC<IProps> = ({ svg, name }) => {
  return (
    <li className="h-[80px] w-[80px] justify-self-center p-[5px] bg-white flex items-center justify-center content-center rounded-[24px]">
      <div className="flex flex-col items-center">
        <ReactSVG className="mb-[15px]" src={`/${svg}`} />
        <p className="text-center text-[12px]">{name}</p>
      </div>
    </li>
  );
};
