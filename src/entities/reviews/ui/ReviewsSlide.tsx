import { FC } from "react";
import Image from "next/image";

interface IProps {
  userName: string;
  date: string;
  text: string;
}

export const ReviewsSlide: FC<IProps> = ({ date, text, userName }) => {
  return (
    <div className="bg-gradient-to-r from-[#E4FAF3] via-[rgba(228,250,243,0.29)] to-[#E4FAF3] p-[20px] rounded-[50px] h-[180px] md:h-[250px]">
      <div className="flex items-center w-full mb-[25px]">
        <div className="flex gap-2 sm:w-[50%]">
          <Image
            width={36}
            height={36}
            alt="logo"
            src={"/user-logo-mini.png"}
            className="object-contain rounded-full"
          />
          <div>
            <span className="text-[#AFC5BE] block text-[10px] md:text-[12px] leading-[32px]">
              {date}
            </span>
            <span className="block md:text-[20px] text-gray-800">{userName}</span>
          </div>
        </div>
        <div className="flex ml-auto">
          <Image
            alt="star"
            src="/star.png"
            width={14}
            height={14}
            className="w-[14px] h-[14px] sm:w-[26px] sm:h-[26px]"
          />
          <Image
            alt="star"
            src="/star.png"
            width={14}
            height={14}
            className="w-[14px] h-[14px] sm:w-[26px] sm:h-[26px] "
          />
          <Image
            alt="star"
            src="/star.png"
            width={14}
            height={14}
            className="w-[14px] h-[14px] sm:w-[26px] sm:h-[26px] "
          />
          <Image
            alt="star"
            src="/star.png"
            width={14}
            height={14}
            className="w-[14px] h-[14px] sm:w-[26px] sm:h-[26px] "
          />
             <Image
            alt="star"
            src="/star.png"
            width={14}
            height={14}
            className="w-[14px] h-[14px] sm:w-[26px] sm:h-[26px] "
          />
        </div>
      </div>
      <p className="text-[22px] leading-[23px] lg:text-[30px] lg:leading-[30px] xl:text-[35px] xl:leading-[35px]   max-w-[400px] md:max-w-[450px] text-gray-800">
        {text}
      </p>
    </div>
  );
};
