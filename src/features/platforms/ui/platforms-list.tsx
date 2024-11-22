import { PlatformItem } from "@/entities/platforms";
import { FC } from "react";

interface IProps {
  title: string;
  options: string[];
  className?: string
}

export const PlatformsList: FC<IProps> = ({ title, options, className }) => {
  return (
    <div className={`${className}`}>
      <h5 className={`font-extrabold	text-[#4FCA9C] mb-[22px] text-[22px]`}>
        {title}
      </h5>
      <ul className="px-[5px]">
        {options.map((option, idx) => (
          <PlatformItem name={option} key={idx} />
        ))}
      </ul>
    </div>
  );
};
