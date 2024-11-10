import { FC } from "react";
import Image from "next/image";

interface IProps {
  userName: string;
  date: string;
  text: string;
}

export const ReviewsSlide: FC<IProps> = ({ date, text, userName }) => {
  return (
    <div className="bg-gradient-to-r from-[#E4FAF3] via-[rgba(228,250,243,0.29)] to-[#E4FAF3] py-[35px] px-[40px] rounded-[50px]">
      <div className="flex justify-between items-center mb-[25px]">
        <div className="flex gap-[18px]">
          <Image width={50} height={50} alt="logo" src={"/user-logo.png"} />
          <div>
            <span className="text-[#AFC5BE] block">{date}</span>
            <span className="block">{userName}</span>
          </div>
        </div>
        <div className="flex">
          <Image width={25} height={25} alt="star" src="/star.png" />
          <Image width={25} height={25} alt="star" src="/star.png" />
          <Image width={25} height={25} alt="star" src="/star.png" />
          <Image width={25} height={25} alt="star" src="/star.png" />
          <Image width={25} height={25} alt="star" src="/star.png" />
        </div>
      </div>
      <p className="text-[32px] max-w-[420px]">{text}</p>
    </div>
  );
};
