import { useQuery } from "@tanstack/react-query";
import { currencyService } from "../services/currecy.service";

import { QUERY_KEYS, Currencies } from "@/shared/";

export const useGetCurrencyRate = (currency: Currencies) => {
  const { data: currencyData, isLoading: currencyIsLoading } = useQuery({
    queryKey: [QUERY_KEYS.CARRENCY_RATE, currency],
    queryFn: () => currencyService.findOne(currency),
    enabled: currency !== "RUB"
  });

  return { currencyData, currencyIsLoading };
};
