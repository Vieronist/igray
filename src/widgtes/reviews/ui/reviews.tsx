import { ReviewsHeader, ReviewsSlider } from "@/features/reviews";
import { AboutService } from "@/features/service";

export const Reviews = () => {
  return (
    <section className="bg-white rounded-[100px] p-[10px] mb-[60px]">
      <ReviewsHeader />
      <div className="flex gap-[10px] items-center flex-wrap md:flex-nowrap p-[20px] md:p-[50px]">
        <ReviewsSlider />
        <AboutService />
      </div>
    </section>
  );
};
