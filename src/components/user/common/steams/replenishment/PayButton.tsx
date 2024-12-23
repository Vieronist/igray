import { FC } from 'react'

import { Currencies } from '@/shared/types/currency.interface'
import { convertFromRub } from '@/shared/utils/convertToRub'
import { countTotalAmoutWithCommission } from '@/shared/utils/count-total-amout-with-commission'

interface IProps {
	currency: Currencies
	currencyRate: number
	currencyIsLoading: boolean
	sum: string
	commission: number
	discount: number
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
			type='submit'
			className='bg-bg_color w-full hover:shadow-[0_2px_#469677]  mx-auto block py-[23px] rounded-[18px] text-white mb-[23px] border-none shadow-[0_5px_#469677] active:shadow-[0_2px_#469677] active:translate-y-[4px] transition-all'
		>
			{currencyIsLoading ? (
				'Загрузка...'
			) : (
				<>
					Пополнить баланс ·{' '}
					{countTotalAmoutWithCommission(
						convertFromRub(Number(sum), currency, {
							usdToRub: currencyRate,
							kztToRub: currencyRate
						}),
						commission,
						discount
					).toFixed(2)}
					{' ₽'}
				</>
			)}
		</button>
	)
}
