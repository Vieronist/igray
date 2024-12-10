import { useMutation } from '@tanstack/react-query'

import { STEAM_KEYS } from '@/constants/query-keys'

import { steamService } from '@/services/steam.service'

export const useCheckPromo = () => {
	const {
		mutate: checkPromo,
		data,
		isSuccess: checkPromoIsSuccess,
		isPending: checkPromoIsPending
	} = useMutation({
		mutationKey: [STEAM_KEYS.CHECK_PROMO],
		mutationFn: (code: string) => steamService.checkPromo(code)
	})

	return { checkPromo, data, checkPromoIsSuccess, checkPromoIsPending }
}
