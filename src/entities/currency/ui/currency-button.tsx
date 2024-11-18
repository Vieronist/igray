import { FC } from "react";
import { Currencies } from "@/shared";

interface IProps {
  currency: Currencies;
  currentCurrency: Currencies;
  onChangeCurrency: (currency: Currencies) => void;
}

export const CurrencyButton: FC<IProps> = ({
  currency,
  currentCurrency,
  onChangeCurrency,
}) => {
  return (
    <button
      type="button"
      id={currency}
      onClick={() => onChangeCurrency(currency)}
      className={`border-[#E2ECEC] text-gray-800 block border rounded-xl p-[12px] ${
        currency === currentCurrency ? "bg-[#1F3238] text-white" : ""
      }`}
    >
      {currency}
    </button>
  );
};
