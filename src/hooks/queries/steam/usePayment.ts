import { useMutation } from '@tanstack/react-query'

import { STEAM_KEYS } from '@/constants/query-keys'

import { steamService } from '@/services/steam.service'

import { IPayment } from '@/types/steam.inerface'

export const usePayment = () => {
	const {
		mutate: sendPayment,
		isError: sendPaymentError,
		isSuccess: sendPaymentSuccess,
		isPending: sendPaymentPending,
		data: sendPaymentData
	} = useMutation({
		mutationKey: [STEAM_KEYS.CHECK_PROMO],
		mutationFn: (payload: IPayment) => steamService.pay(payload)
	})

	return {
		sendPayment,
		sendPaymentError,
		sendPaymentSuccess,
		sendPaymentData,
		sendPaymentPending
	}
}
