import { Currencies, PaymentMethods, symbols, usePayment } from "@/shared";
import { FC, useEffect } from "react";
import { useRouter } from 'next/router';


interface IProps {
  currency: Currencies;
  totalAmount: number;
  commission: number;
  method: PaymentMethods;
  login: string; // login steam
}

export const PayButton: FC<IProps> = ({
  currency,
  totalAmount,
  commission,
  method,
  login,
}) => {

  const router = useRouter();

  const { sendPayment, sendPaymentSuccess, sendPaymentData} = usePayment();

  const handleClick = () => {
    sendPayment({
      amount: totalAmount,
      currency,
      payment_type: method,
      amount_after: totalAmount + totalAmount * (commission / 100),
      login,
    });
  };

  useEffect(() => {
      if(sendPaymentSuccess){
        router.push(sendPaymentData?.link || "/")
      }
  },[sendPaymentSuccess])


  return (
    <button
      onClick={handleClick}
      className="bg-[#66D8AD] w-full py-[23px] rounded-[18px] text-[white] mb-[23px]"
    >
      Пополнить баланс · {totalAmount + totalAmount * (commission / 100)}{" "}
      {symbols[currency]}
    </button>
  );
};
