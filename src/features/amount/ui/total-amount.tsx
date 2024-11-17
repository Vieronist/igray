import { convertFromRub, Currencies } from "@/shared";
import { FC } from "react";

interface IProps {
  sum: string | null;
  commission: number;
  currency: Currencies;
  currencyRate: number;
  currencyIsLoading: boolean;
}

export const TotalAmount: FC<IProps> = ({
  sum,
  currency,
  commission,
  currencyIsLoading,
  currencyRate,
}) => {
  const calculatedSum = sum
    ? Number(sum) + Number(sum) * (commission / 100)
    : 0;

  return (
    <div className="rounded-[18px] flex justify-between items-center py-[8px] basis-[50%] bg-[linear-gradient(100.65deg,_#E4FAF3_0.34%,_rgba(228,250,243,0.29)_47.86%,_#E4FAF3_92.62%,_rgba(228,250,243,0.34)_138.07%)] px-[15px]">
      {currencyIsLoading ? (
        "Загрузка курса..."
      ) : (
        <>
          <div className="flex flex-col justify-center">
            <span className="text-[11px] font-medium block text-[#AFC5BE]">
              Сумма с коммисией
            </span>
            <span className="text-gray-800">{`${
              sum === null && currencyRate && currencyRate
                ? 0
                : convertFromRub(calculatedSum, currency, {
                    usdToRub: currencyRate,
                    kztToRub: currencyRate,
                  })
            } ${"₽"}`}</span>
          </div>
          {currency !== "RUB" && (
            <div className="flex flex-col justify-center">
              <span className="text-[12px]  text-right font-medium block text-[#AFC5BE]">
                Курс
              </span>
              {currencyRate && !currencyIsLoading && (
                <span className="text-[13px] font-medium block text-[#AFC5BE]">
                  {currencyRate} {"₽"}
                </span>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
