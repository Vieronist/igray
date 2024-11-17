import Image from "next/image";
import Link from "next/link";

export const ErrorPanel = () => {
  return (
    <section className="mt-5 mb-[120px] mx-auto flex flex-col items-center md:flex-row md:justify-between w-[95%] md:w-full">
      <div className="w-[350px] sm:w-[450px] md:w-[723px] mx-auto">
        <h3 className="text-4xl font-extrabold leading-[35.2px] tracking-tight text-left mb-[27px]">
          Ooops... 😭 <br className="sm:hidden" /> оплата не удалась
        </h3>

        <p className="text-[18px] mb-[40px] md:w-[510px]">
          Возможно вы ввели неправильные данные карты, или недостаточно средств
          на вашем счете.
        </p>
        <div className="sm:flex sm:items-center sm:gap-[20px]">
          <Link
            href={"/"}
            className="w-[98%] py-[21px] md:w-[50%] mb-[21px] sm:mb-0 bg-[#66D8AD] block text-white text-center rounded-[18px] "
          >
            Перейти на главную
          </Link>
          <button className="border-[#66D8AD] w-[98%] md:w-[30%] border py-[21px] text-center rounded-[18px]">
            Отменить оплату
          </button>
        </div>
      </div>
      <Image
        className="hidden xl:block"
        width={621}
        height={228}
        src={"/error-icon.png"}
        alt={""}
      />
    </section>
  );
};
