import Link from "next/link";

export const ReviewsHeader = () => {
  return (
    <div className="p-[30px] md:px-[60px] md:pt-[60px]">
      <h3 className="text-[#4FCA9C] mb-[10px]">Отзывы</h3>
      <div className="flex items-center justify-between">
<<<<<<< HEAD
        <h3 className="font-extrabold leading-[35px] text-[32px] text-wrap min-w-[150px] md:text-[46px]  ">
=======
        <h3 className="font-extrabold text-[18px] text-wrap min-w-[150px] md:text-[46px]  ">
>>>>>>> c010244e018ca0cf6f8e191a1f1446fb421fcdf5
          <span className="text-[#1F3238]">Более 10 000 покупок, </span>
          <span className="text-[#4FCA9C]">5 000 отзывов!</span>
        </h3>
        <Link
          className="border-[#66D8AD] border rounded-[18px] py-[12px] px-5 hidden md:block text-gray-800"
          href="/reviews"
        >
          Все отзывы
        </Link>
      </div>
    </div>
  );
};
