import { FC } from "react";
import { ReactSVG } from "react-svg";

interface IProps {
  classNameDiv?: string;
  classNameInput?: string;
}

export const SearchPanel: FC<IProps> = ({ classNameDiv, classNameInput }) => {
  return (
    <div
      className={` py-[7px] border-2 rounded-[18px] ${
        classNameDiv ? classNameDiv : ""
      }`}
    >
      <ReactSVG src="/lupa.svg" className="" />
      <input
        className={`outline-none bg-transparent text-gray-800 ${
          classNameInput ? classNameInput : ""
        }`}
        placeholder="Search"
        type="text"
      />
    </div>
  );
};
