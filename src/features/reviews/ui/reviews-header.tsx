import Link from "next/link";

export const ReviewsHeader = () => {
  return (
    <>
      <h3 className="text-[#4FCA9C] mb-[10px]">Отзывы</h3>
      <div className="flex items-center justify-between mb-[45px]">
        <h3 className="font-extrabold text-[46px]">
          <span className="text-[#1F3238]">Более 10 000 покупок, </span>
          <span className="text-[#4FCA9C]">5 000 отзывов!</span>
        </h3>
        <Link
          className="border-[#66D8AD] border rounded-[18px] py-[12px] px-5"
          href="/reviews"
        >
          Все отзывы
        </Link>
      </div>
    </>
  );
};
