import { IPayment } from "@/types/steam.inerface";
import { useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "../config/constants";
import { steamService } from "../services/steam.service";

export const useCheckPromo = () => {
	const {
		mutate: checkPromo,
		data,
		isSuccess: checkPromoIsSuccess,
		isPending: checkPromoIsPending,
	} = useMutation({
		mutationKey: [QUERY_KEYS.STEAM],
		mutationFn: (code: string) => steamService.checkPromo(code),
	});

	return { checkPromo, data, checkPromoIsSuccess, checkPromoIsPending };
};

export const usePayment = () => {
	const {
		mutate: sendPayment,
		isError: sendPaymentError,
		isSuccess: sendPaymentSuccess,
		isPending: sendPaymentPending,
		data: sendPaymentData,
	} = useMutation({
		mutationKey: [QUERY_KEYS.STEAM],
		mutationFn: (payload: IPayment) => steamService.pay(payload),
	});

	return {
		sendPayment,
		sendPaymentError,
		sendPaymentSuccess,
		sendPaymentData,
		sendPaymentPending,
	};
};
