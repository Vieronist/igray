import { MethodPaymentItem } from "@/entities/method-payment";

export const MethodsPayment = () => {
  return (
    <div className="mb-7">
      <h3 className="text-[#AFC5BE] text-[12px] mb-7">
        Выберите вариант оплаты
      </h3>
      <ul className="flex gap-[12px]">
        <MethodPaymentItem
          svg="cards.svg"
          text="Карты Visa, МИР,
Mastercard"
          title="Оплата картой"
        />
        <MethodPaymentItem
          svg="spb.svg"
          text="Через приложение
вашего банка"
          title="Через СПБ"
        />
        <MethodPaymentItem
          svg="crypto.svg"
          text="Возможна оплата
в TRC20 и BTC"
          title="Криптовалюта"
        />
      </ul>
    </div>
  );
};
