import { IGetOrdersQueryParams } from "@/types/orders.interface";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../config/constants";
import { ordersService } from "../services/orders.service";

export const useGetOrders = (payload: IGetOrdersQueryParams) => {
	const { data: orders, isLoading } = useQuery({
		queryKey: [QUERY_KEYS.GET_STEAM_ORDERS, payload.page, payload.limit],
		queryFn: () => ordersService.findMany(payload),
	});

	return { orders, isLoading };
};
