import {
  convertFromRub,
  Currencies,
  PaymentMethods,
  usePayment,
} from "@/shared";
import { FC, useEffect } from "react";
import { useRouter } from "next/router";

interface IProps {
  currency: Currencies;
  totalAmount: string | null;
  commission: number;
  method: PaymentMethods;
  login: string; // login steam
  discount: number;
  currencyRate: number;
  currencyIsLoading: boolean;
}

export const PayButton: FC<IProps> = ({
  currency,
  totalAmount,
  commission,
  method,
  login,
  discount,
  currencyRate,
  currencyIsLoading,
}) => {
  const router = useRouter();

  const { sendPayment, sendPaymentSuccess, sendPaymentData } = usePayment();

  const cost = totalAmount ? Math.round(Number(totalAmount) * 100) / 100 : 0;

  const calculatedSum = cost
    ? Number(cost) + Number(cost) * (commission / 100)
    : 0;

  const handleClick = () => {
    sendPayment({
      amount: cost,
      currency,
      payment_type: method,
      amount_after: discount
        ? cost + cost * (commission / 100) - cost * (discount / 100)
        : cost + cost * (commission / 100),
      login,
    });
  };

  useEffect(() => {
    if (sendPaymentSuccess) {
      router.push(sendPaymentData?.link || "/");
    }
  }, [router, sendPaymentData?.link, sendPaymentSuccess]);

  return (
    <button
      onClick={handleClick}
      className="bg-[#66D8AD] w-full mx-auto block py-[23px] rounded-[18px] text-[white] mb-[23px]"
    >
      {currencyIsLoading ? (
        "Загрузка..."
      ) : (
        <>
          Пополнить баланс ·{" "}
          {convertFromRub(calculatedSum, currency, {
            usdToRub: currencyRate,
            kztToRub: currencyRate,
          })}
          {" ₽"}
        </>
      )}
    </button>
  );
};
