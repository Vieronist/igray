import { ReviewsSlide } from "@/entities/reviews";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { useRef } from "react";
import { ReactSVG } from "react-svg";
import { Swiper as SwiperType } from "swiper";

export const ReviewsSlider = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="w-[50%]">
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={50}
        slidesPerView={1}
        height={260}
        className="relative"
      >
        <SwiperSlide>
          <ReviewsSlide
            text="Самый удобный сервис
для пополнения Стима🔥Купила уже 9 игр! "
            userName="Alex"
            date="Сен 13, 2023"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewsSlide
            text="Самый удобный сервис
для пополнения Стима🔥Купила уже 9 игр! "
            userName="Alex"
            date="Сен 13, 2023"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewsSlide
            text="Самый удобный сервис
для пополнения Стима🔥Купила уже 9 игр! "
            userName="Alex"
            date="Сен 13, 2023"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewsSlide
            text="Самый удобный сервис
для пополнения Стима🔥Купила уже 9 игр! "
            userName="Alex"
            date="Сен 13, 2023"
          />
        </SwiperSlide>
        <div className="absolute right-5 bottom-5 z-20 flex gap-[10px]">
          <button
            className="p-[15px] bg-white rounded-[18px]"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ReactSVG src="arrow-right.svg" />
          </button>
          <button
            className="p-[15px] bg-white rounded-[18px]"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ReactSVG src="arrow-left.svg" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};
