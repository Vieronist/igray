import { useMutation } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/api/constants'

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
		mutationKey: [QUERY_KEYS.STEAM],
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
