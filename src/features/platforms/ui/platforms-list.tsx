import { PlatformItem } from "@/entities/platforms";
import { FC } from "react";

interface IProps {
  title: string;
  options: string[];
  className?: string;
  hrefs: string[];
}

export const PlatformsList: FC<IProps> = ({ title, options, className, hrefs }) => {
  return (
    <div className={`${className}`}>
      <h5 className={`font-extrabold	text-[#4FCA9C] mb-[22px] text-[22px]`}>
        {title}
      </h5>
      <ul className="px-[2px]">
        {options.map((option, idx) => (
          <PlatformItem href={hrefs[idx]} name={option} key={idx} />
        ))}
      </ul>
    </div>
  );
};
