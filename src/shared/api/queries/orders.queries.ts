import { QUERY_KEYS } from "@/shared/";
import { useQuery } from "@tanstack/react-query";
import type { IGetOrdersQueryParams } from "@/shared";
import { ordersService } from "../services/orders.service";

export const useGetOrders = (payload: IGetOrdersQueryParams) => {
  const { data: orders } = useQuery({
    queryKey: [QUERY_KEYS.GET_STEAM_ORDERS, payload.page, payload.limit],
    queryFn: () => ordersService.findMany(payload),
  });

  return { orders };
};
