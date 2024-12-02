import { Currencies } from "@/types/currency.interface";
import { axiosClassic } from "../config/axios";
import { QUERY_KEYS, SERVICE_URL } from "../config/constants";

export const currencyService = {
	axios: axiosClassic,

	async findOne(currency: Currencies) {
		const queryParams = new URLSearchParams();

		queryParams.set("currency", currency);

		return await this.axios
			.get(
				`${SERVICE_URL.STEAM}/${QUERY_KEYS.CARRENCY_RATE}?${queryParams.toString()}`
			)
			.then((res) => res.data);
	},
};
