import { useQuery } from '@tanstack/react-query'

import { STEAM_KEYS } from '@/constants/query-keys'

import { currencyService } from '@/services/currency.service'

import { Currencies } from '@/types/currency.interface'

export const useGetCurrencyRate = (currency: Currencies) => {
	const { data: currencyData, isLoading: currencyIsLoading } = useQuery({
		queryKey: [STEAM_KEYS.RATE, currency],
		queryFn: () => currencyService.findOne(currency),
		enabled: currency !== 'RUB'
	})

	return { currencyData, currencyIsLoading }
}
