import { FC, useRef } from "react";
import { ReactSVG } from "react-svg";

interface IProps {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

export const FaqItemAccardion: FC<IProps> = ({
  title,
  content,
  isActive,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <li
    className={`bg-[#FFFFFF] rounded-[18px] mb-2 pl-[20px] 2xl:w-[300px] transition-all duration-300 ease-in-out ${
      isActive ? "relative z-10 shadow-lg scale-[1.02] border-[2px]" : "z-0"
    }`}
    style={{
      marginBottom: isActive ? "-16px" : "8px", // Накладываем активный вопрос на следующие
      borderColor: isActive ? "#66D8AD" : "transparent", // Устанавливаем цвет границы
    }}
  >
    <div
      className="cursor-pointer py-2 pr-[5px] flex justify-between items-center"
      onClick={onClick}
    >
      <p className="text-[14px] font-medium text-gray-800">{title}</p>
      <button className="rounded-[12px] bg-gradient-to-r from-[#E4FAF3] via-[rgba(228,250,243,0.29)] to-[#E4FAF3] p-3">
        <ReactSVG src="arrow-up-right.svg" />
      </button>
    </div>
    <div
      ref={contentRef}
      className={`absolute left-0 pt-1 pb-5 right-0 bg-white rounded-[18px] overflow-hidden transition-all duration-300 ease-in-out ${
        isActive ? "opacity-100 max-h-screen border-[2px]" : "opacity-0 max-h-0"
      }`}
      style={{
        top: "100%", // Выпадаем вниз, чтобы не двигать другие вопросы
        maxHeight:
          isActive && contentRef.current
            ? `${contentRef.current.scrollHeight}px`
            : "0px",
        borderColor: isActive ? "#66D8AD" : "transparent", // Устанавливаем цвет границы
      }}
    >
      <div className="pt-3 pb-3 px-4 text-gray-800">{content}</div>
    </div>
  </li>
  );
};
