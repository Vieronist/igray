import { Currencies } from "@/shared";
import { FC, useEffect } from "react";
import { symbols } from "@/shared";

interface IProps {
  sum: number | null;
  commission: number;
  currency: Currencies;
}

export const TotalAmount: FC<IProps> = ({ sum, currency, commission }) => {

  useEffect(() => {
    console.log(sum, currency)
  },[sum, currency])

  return (
    <div className="rounded-[18px] basis-[37%] bg-[linear-gradient(100.65deg,_#E4FAF3_0.34%,_rgba(228,250,243,0.29)_47.86%,_#E4FAF3_92.62%,_rgba(228,250,243,0.34)_138.07%)] px-[15px] py-[10px]">
      <span className="text-[12px] font-medium block text-[#AFC5BE]">
        Сумма с коммисией
      </span>
      <span>{`${sum === null ? 0 : sum + sum * (commission / 100)} ${
        symbols[currency]
      }`}</span>
    </div>
  );
};
