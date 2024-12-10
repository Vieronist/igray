import { axiosClassic } from '@/api/axios'

import { adminApiUrl } from '@/config/api-routes/admin'

import {
	IGetOrdersQueryParams,
	IOrdersResponse
} from '@/types/orders.interface'

export const ordersService = {
	axios: axiosClassic,

	async findMany({
		page,
		limit
	}: IGetOrdersQueryParams): Promise<IOrdersResponse> {
		const queryParams = new URLSearchParams()
		queryParams.set('page', page.toString())
		queryParams.set('limit', limit.toString())
		return await this.axios
			.get(adminApiUrl.getSteamOrders(queryParams.toString()))
			.then(res => res.data)
	}
}
