import { FC } from "react";
import { ReactSVG } from "react-svg";

interface IProps {
  classNameDiv?: string;
  classNameInput?: string;
}

export const SearchPanel: FC<IProps> = ({ classNameDiv, classNameInput }) => {
  return (
    <div
      className={`px-[10px] py-[7px] border-2 rounded-[18px] ${
        classNameDiv ? classNameDiv : ""
      }`}
    >
      <ReactSVG src="/lupa.svg" className="" />
      <input
        className={`outline-none bg-transparent ${
          classNameInput ? classNameInput : ""
        }`}
        placeholder="Search"
        type="text"
      />
    </div>
  );
};
