import Link from "next/link";

export const SuccessPaymentPanel = () => {
  return (
    <section className="mt-5 mx-auto mb-[100px] flex flex-col items-center">
        <div>

      <h3 className="font-extrabold text-[32px] mb-[32px]">Ваш заказ оформлен</h3>
      <p className="mb-[22px]">
        Вы успешно оплатили! В скорем времени деньги поступят на ваш Steam
        аккаунт
      </p>
        </div>
      <p className="text-[12px] text-[#AFC5BE] text-center mb-[20px]" >
      Мы отправили на вашу почту чек об оплате и данные заказа
      </p>
      <div></div>
      <Link
          href={"/"}
          className="w-[98%] py-[21px] md:w-[30%] mb-[21px] sm:mb-0 bg-[#66D8AD] block text-white text-center rounded-[18px] "
        >
          Перейти на главную
        </Link>
    </section>
  );
};
