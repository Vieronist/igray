import {
  IGetOrdersQueryParams,
  IOrdersResponse,
  QUERY_KEYS,
  SERVICE_URL,
} from "@/shared";
import { instance } from "../api.instance";

export const ordersService = {
  axios: instance,

  async findMany({
    page,
    limit,
  }: IGetOrdersQueryParams): Promise<IOrdersResponse> {
    

    const queryParams = new URLSearchParams();
    queryParams.set("page", page.toString());
    queryParams.set("limit", limit.toString());

    return await this.axios
      .get(
        `${SERVICE_URL.ADMIN}/${
          QUERY_KEYS.GET_STEAM_ORDERS
        }?${queryParams.toString()}`
      )
      .then((res) => res.data);
  },
};
