import { SERVICE_URL } from "@/shared/";
import { instance } from "../api.instance";
import type { IPayment, IPromoResponse } from "@/shared/";

export const steamService = {
  axios: instance,

  async checkPromo(promo: string): Promise<IPromoResponse> {
    return await this.axios.post(`${SERVICE_URL.STEAM}/check-promo`, { promo });
  },

  async pay(payload: IPayment): Promise<IPromoResponse> {
    return this.axios.post(`${SERVICE_URL.STEAM}/send_data`, payload);
  },
};
