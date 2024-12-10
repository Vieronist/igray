import { axiosClassic } from '@/api/axios'

import { publicApiUrl } from '@/config/api-routes/public'

import {
	IPayment,
	IPaymentResponse,
	IPromoResponse
} from '@/types/steam.inerface'

export const steamService = {
	axios: axiosClassic,

	async checkPromo(promo: string): Promise<IPromoResponse> {
		const res = (
			await this.axios.post(publicApiUrl.steamCheckPromo(), { promo })
		).data

		return res
	},

	async pay(payload: IPayment): Promise<IPaymentResponse> {
		return (
			await this.axios.post(publicApiUrl.steamSendData(), {
				...payload
			})
		).data
	}
}
