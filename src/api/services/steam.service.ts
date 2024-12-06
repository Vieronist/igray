import {
	IPayment,
	IPaymentResponse,
	IPromoResponse,
} from "@/types/steam.inerface";
import { axiosClassic } from "../config/axios";
import { SERVICE_URL } from "../config/constants";

export const steamService = {
	axios: axiosClassic,

	async checkPromo(promo: string): Promise<IPromoResponse> {
		const res = (
			await this.axios.post(`${SERVICE_URL.STEAM}/check_promo`, { promo })
		).data;

		return res;
	},

	async pay(payload: IPayment): Promise<IPaymentResponse> {
		return (
			await this.axios.post(`${SERVICE_URL.STEAM}/send_data`, { ...payload })
		).data;
	},
};
