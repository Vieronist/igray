import { FC } from "react";
import { ReactSVG } from "react-svg";

interface IProps {
  className?: string;
}

export const SearchPanel: FC<IProps> = ({ className }) => {
  return (
    <div
      className={`px-[10px] py-[7px] border-2 rounded-[18px] flex items-center gap-2 ${
        className ? className : ""
      }`}
    >
      <ReactSVG src="/lupa.svg" className="" />
      <input
        className="outline-none bg-transparent"
        placeholder="Search"
        type="text"
      />
    </div>
  );
};
