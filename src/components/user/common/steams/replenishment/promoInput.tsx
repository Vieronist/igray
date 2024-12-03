"use client";

import { FC, useState } from "react";

interface IProps {
	checkPromo: (code: string) => void;
	discount: number;
}

export const PromoInput: FC<IProps> = ({ checkPromo, discount }) => {
	const [promoValue, setPromoValue] = useState("");

	const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPromoValue(e.target.value);
	};

	return (
		<div className='border-[#DDF1EA] border rounded-[18px] flex items-center px-3 pt-3 pb-2 pl-3 w-full mb-5'>
			<div className='flex-grow w-[20%]'>
				<label
					className='block text-[12px]  font-medium text-gray-800 tracking-tighter'
					htmlFor='promo'
				>
					У вас есть промокод?
				</label>
				<input
					id='promo'
					type='text'
					placeholder='Уменьши комиссию...'
					className='outline-none p-0 bg-transparent block text-gray-800'
					onChange={handleChangeValue}
				/>
			</div>
			<button
				onClick={() => checkPromo(promoValue)}
				type='button'
				className='bg-[linear-gradient(100.65deg,_#E4FAF3_0.34%,_rgba(228,250,243,0.29)_47.86%,_#E4FAF3_92.62%,_rgba(228,250,243,0.34)_138.07%)] rounded-[14px] py-[15px] px-3 sm:w-auto sm:px-5 sm:py-4 font-medium flex-shrink-0 text-gray_color'
			>
				{discount ? `Ваша скидка - ${discount} %` : "Применить"}
			</button>
		</div>
	);
};
