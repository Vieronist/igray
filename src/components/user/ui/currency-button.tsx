import { Currencies } from "@/types/currency.interface";
import { FC } from "react";

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
			type='button'
			id={currency}
			onClick={() => onChangeCurrency(currency)}
			className={`border-[#E2ECEC] text-gray-800 block border rounded-xl p-[8px] ${
				currency === currentCurrency ? "bg-primary_color text-white" : ""
			}`}
		>
			{currency}
		</button>
	);
};
