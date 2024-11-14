import { CurrencyButton } from "@/entities/currency";
import { Currencies, symbols } from "@/shared";
import { FC} from "react";

interface IProps {
  currency: Currencies;
  onChangeCurrency: (currency: Currencies) => void;
  onChangeSum: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sum: number;
}

export const CurrencyInput: FC<IProps> = ({
  currency,
  onChangeCurrency: handleChangeCurrency,
  onChangeSum: handleChangeSum,
  sum,
}) => {
  // const minSum = {
  //   RUB: 100,
  //   KZT: 500,
  //   USD: 5,
  // };
  return (
    <div className="rounded-[18px] border-[#DDF1EA] border px-[15px] py-[10px] flex mb-[15px] justify-between">
      <div>
        <label
          className="text-[#AFC5BE] text-[12px] font-medium block"
          htmlFor="sum"
        >
          Сумма пополнения
        </label>
        <div className="relative">
          <input
            placeholder="0.00"
            id="sum"
            type="number"
            value={sum}
            max={100000}
  
            onChange={handleChangeSum}
            className="pl-8 outline-none w-full text-gray-800"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#AFC5BE]">
            {symbols[currency]}
          </span>
        </div>
      </div>
      <ul className="flex gap-1">
        <li>
          <CurrencyButton
            onChangeCurrency={handleChangeCurrency}
            currentCurrency={currency}
            currency="RUB"
          />
        </li>
        <li>
          <CurrencyButton
            onChangeCurrency={handleChangeCurrency}
            currentCurrency={currency}
            currency="KZT"
          />
        </li>
        <li>
          <CurrencyButton
            onChangeCurrency={handleChangeCurrency}
            currentCurrency={currency}
            currency="USD"
          />
        </li>
      </ul>
    </div>
  );
};
