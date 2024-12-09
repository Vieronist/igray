import { useMutation } from '@tanstack/react-query'

import { QUERY_KEYS } from '@/api/constants'

import { steamService } from '@/services/steam.service'

export const useCheckPromo = () => {
	const {
		mutate: checkPromo,
		data,
		isSuccess: checkPromoIsSuccess,
		isPending: checkPromoIsPending
	} = useMutation({
		mutationKey: [QUERY_KEYS.STEAM],
		mutationFn: (code: string) => steamService.checkPromo(code)
	})

	return { checkPromo, data, checkPromoIsSuccess, checkPromoIsPending }
}
