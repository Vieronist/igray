import { ReviewsHeader, ReviewsSlider } from "@/features/reviews";
import { AboutService } from "@/features/service";
import { FC } from "react";

interface IProps {
  className?: string;
}

export const Reviews: FC<IProps> = ({ className }) => {
  return (
    <section
      className={`bg-white rounded-[100px] pt-[25px] pb-5 md:pt-[15px] px-[8px] mb-[60px] ${className}`}
    >
      <ReviewsHeader />
      <div className="flex gap-[10px] items-center flex-wrap md:flex-nowrap p-[2px] md:p-[50px]">
        <ReviewsSlider />
        <AboutService />
      </div>
    </section>
  );
};
