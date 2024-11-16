import { FC, useRef, useState } from "react";
import { ReactSVG } from "react-svg";

interface IProps {
  title: string;
  content: string;
}

export const FaqItemAccardion: FC<IProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <li className="bg-[#FFFFFF] rounded-[18px] mb-2 pl-[20px] 2xl:w-[300px]">
      <div
        className=" cursor-pointer py-2 pr-[5px] flex justify-between items-center"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <p className="text-[14px] font-medium text-gray-800">{title}</p>
        <button className="rounded-[12px] bg-gradient-to-r from-[#E4FAF3] via-[rgba(228,250,243,0.29)] to-[#E4FAF3] p-3">
          <ReactSVG src="arrow-up-right.svg" />
        </button>
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          isActive ? "max-h-screen" : "max-h-0"
        }`}
        style={{
          maxHeight:
            isActive && contentRef.current
              ? `${contentRef.current.scrollHeight}px`
              : "0px",
        }}
      >
        <div className="p-4 text-gray-800 ">{content}</div>
      </div>
    </li>
  );
};
