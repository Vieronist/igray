import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/api/constants'

import { ordersService } from '@/services/orders.service'

import { IGetOrdersQueryParams } from '@/types/orders.interface'

export const useGetOrders = (payload: IGetOrdersQueryParams) => {
	const { data: orders, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.GET_STEAM_ORDERS, payload.page],
		queryFn: () => ordersService.findMany(payload),
		placeholderData: keepPreviousData
	})

	return { orders, isLoading }
}
