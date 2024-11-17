import { Currencies, QUERY_KEYS, SERVICE_URL } from "@/shared/";
import { instance } from "../api.instance";

export const currencyService = {
  axios: instance,

  async findOne(currency: Currencies) {

    const queryParams = new URLSearchParams();

    queryParams.set("currency", currency);

    return await this.axios
      .get(`${SERVICE_URL.STEAM}/${QUERY_KEYS.CARRENCY_RATE}?${queryParams.toString()}`)
      .then((res) => res.data);
  },
};
