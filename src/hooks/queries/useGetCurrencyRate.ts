import { useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/api/constants'

import { currencyService } from '@/services/currency.service'

import { Currencies } from '@/types/currency.interface'

export const useGetCurrencyRate = (currency: Currencies) => {
	const { data: currencyData, isLoading: currencyIsLoading } = useQuery({
		queryKey: [QUERY_KEYS.CARRENCY_RATE, currency],
		queryFn: () => currencyService.findOne(currency),
		enabled: currency !== 'RUB'
	})

	return { currencyData, currencyIsLoading }
}
