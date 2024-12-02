"use client";

import { symbols } from "@/constants/symbols";
import { Currencies } from "@/types/currency.interface";
import { FC } from "react";
import { CurrencyButton } from "../../../ui/currency-button";

interface IProps {
	currency: Currencies;
	onChangeCurrency: (currency: Currencies) => void;
	onChangeSum: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
	sum: string | null;
	touchedSumInput: boolean;
	onTouch: () => void;
}

export const CurrencyInput: FC<IProps> = ({
	currency,
	onChangeCurrency: handleChangeCurrency,
	onChangeSum: handleChangeSum,
	sum,
	touchedSumInput,
	onTouch,
}) => {
	const minSums = {
		USD: 1,
		RUB: 100,
		KZT: 500,
	};

	const maxSums = {
		USD: 100,
		RUB: 10000,
		KZT: 46000,
	};

	const currencies: Currencies[] = ["RUB", "KZT", "USD"];

	return (
		<>
			<div className='rounded-[18px] border-[#DDF1EA] border px-[7px] py-[10px] flex justify-between items-center w-full'>
				<div className='w-full'>
					<span className='text-[11px] leading-[-20px] tracking-tight font-medium text-[#AFC5BE]'>
						Сумма попалнения
					</span>
					<div className='relative'>
						<input
							type='text'
							onChange={(e) => {
								onTouch();
								if (currency === "USD") {
									const rawValue = Number(
										e.target.value.replace(/[^0-9.]/g, "")
									);
									handleChangeSum((Math.round(rawValue / 5) * 5).toString());
								} else {
									handleChangeSum(e);
								}
							}}
							className='outline-none text-gray-800 w-[100px] h-[24px]'
							value={sum ? `${sum} ${symbols[currency]}` : ""}
						/>

						{currency === "USD" && (
							<input
								type='range'
								step={5}
								min={5}
								value={Number(sum)}
								max={100}
								className='block w-full absolute bottom-[-10px]'
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									onTouch();
									const value = Number(e.target.value);
									const roundedValue = Math.round(value / 5) * 5;

									handleChangeSum(roundedValue.toString());
								}}
							/>
						)}
					</div>
				</div>
				<ul className='flex gap-1'>
					{currencies.map((el, idx) => (
						<li key={idx}>
							<CurrencyButton
								onChangeCurrency={handleChangeCurrency}
								currentCurrency={currency}
								currency={el}
							/>
						</li>
					))}
				</ul>
			</div>
			<span className='text-[14px] block mb-[10px]'>
				{touchedSumInput &&
					(Number(sum) < minSums[currency] ||
						Number(sum) > maxSums[currency]) && (
						<span className='text-red-600 text-[12px] ml-2'>
							{Number(sum) < minSums[currency]
								? "Минимальная сумма"
								: "Максимальная сумма"}{" "}
							{Number(sum) < minSums[currency]
								? `${minSums[currency]} ${symbols[currency]}`
								: `${maxSums[currency]} ${symbols[currency]}`}
						</span>
					)}
			</span>
		</>
	);
};
