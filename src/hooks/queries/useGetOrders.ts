import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { STEAM_KEYS } from '@/constants/query-keys'

import { ordersService } from '@/services/orders.service'

import { IGetOrdersQueryParams } from '@/types/orders.interface'

export const useGetOrders = (payload: IGetOrdersQueryParams) => {
	const {
		data: orders,
		isLoading,
		error
	} = useQuery({
		queryKey: [STEAM_KEYS.GET_ORDERS, payload.page],
		queryFn: () => ordersService.findMany(payload),
		placeholderData: keepPreviousData
	})

	return { orders, isLoading, error }
}
