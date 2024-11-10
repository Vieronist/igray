import { SERVICE_URL } from "@/shared/";
import { instance } from "../api.instance";
import type { IPayment, IPromoResponse } from "@/shared/";

export const steamService = {
  axios: instance,

  async checkPromo(promo: string): Promise<IPromoResponse> {
    const res =  (await this.axios.post(`${SERVICE_URL.STEAM}/check_promo`, { promo })).data;
    
    return res
  },

  async pay(payload: IPayment): Promise<IPromoResponse> {
    return (await this.axios.post(`${SERVICE_URL.STEAM}/send_data`, {...payload})).data;
  },
};
