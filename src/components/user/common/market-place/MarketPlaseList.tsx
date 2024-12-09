'use client'

import { MarketplaceItem } from './MarketPlaceItem'

export const MarketplacesList = () => {
	const marketplaces = [
		'avito-full.svg',
		'plati-full.svg',
		'telegram-logo-big.png',
		'vk-full.svg',
		'aliexpress-full.svg',
		'wb-full.svg'
	]

	const hrefs = [
		'https://avito.ru/brands/igray24',
		'https://plati.market/seller/x-shop-174/1050934/',
		'https://t.me/Igray24_bot',
		'https://vk.com/igray24',
		'https://aliexpress.ru/store/1100219963?spm=a2g38.sc_product_list.0.0.252d2304G11LgS',
		'https://www.wildberries.ru/seller/833104'
	]

	return (
		<ul className='grid grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-y-[5px] gap-x-[10px] mx-auto'>
			{marketplaces.map((path, idx) => (
				<MarketplaceItem key={idx} path={path} href={`${hrefs[idx]}`} />
			))}
		</ul>
	)
}
