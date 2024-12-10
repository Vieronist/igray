import { axiosClassic } from '@/api/axios'

import { publicApiUrl } from '@/config/api-routes/public'

import { Currencies } from '@/types/currency.interface'

export const currencyService = {
	axios: axiosClassic,

	async findOne(currency: Currencies) {
		const queryParams = new URLSearchParams()

		queryParams.set('currency', currency)

		return await this.axios
			.get(publicApiUrl.currency_rate(queryParams.toString()))
			.then(res => res.data)
	}
}
