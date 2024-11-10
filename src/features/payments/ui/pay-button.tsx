import { Currencies, symbols } from "@/shared";
import { FC } from "react";

interface IProps {
  currency: Currencies;
  totalAmount: number;
  commission: number;
}

export const PayButton: FC<IProps> = ({
  currency,
  totalAmount,
  commission,
}) => {
  return (
    <button className="bg-[#66D8AD] w-full py-[23px] rounded-[18px] text-[white] mb-[23px]">
      Пополнить баланс · {totalAmount + totalAmount * (commission / 100)}{" "}
      {symbols[currency]}
    </button>
  );
};
