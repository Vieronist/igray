import {
  convertFromRub,
  countTotalAmoutWithCommission,
  Currencies,
} from "@/shared";
import { FC } from "react";

interface IProps {
  currency: Currencies;
  currencyRate: number;
  currencyIsLoading: boolean;
  sum: string;
  commission: number;
  discount: number;
}

export const PayButton: FC<IProps> = ({
  currency,
  currencyRate,
  currencyIsLoading,
  sum,
  commission,
  discount
}) => {
  return (
    <button
      type="submit"
      className="bg-[#66D8AD] w-full mx-auto block py-[23px] rounded-[18px] text-[white] mb-[23px]"
    >
      {currencyIsLoading ? (
        "Загрузка..."
      ) : (
        <>
          Пополнить баланс ·{" "}
          {countTotalAmoutWithCommission(
            convertFromRub(Number(sum), currency, {
              usdToRub: currencyRate,
              kztToRub: currencyRate,
            }),
            commission,
            discount
          ).toFixed(2)}
          {" ₽"}
        </>
      )}
    </button>
  );
};
