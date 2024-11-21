import { FC } from "react";
import { ReactSVG } from "react-svg";

interface IProps {
  path: string;
}

export const ContactItem: FC<IProps> = ({ path }) => {
  return (
    <li className="p-[15px] border-[#DDF1EA] border rounded-[18px] ">
      <ReactSVG src={path} height={18} width={18} />
    </li>
  );
};
