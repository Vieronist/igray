'use client'

import { MarketplaceItem } from './MarketPlaceItem'

export const MarketplacesList = () => {
	return (
		<ul className='grid grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-y-[5px] gap-x-[10px] mx-auto'>
			{marketplaces.map((path, idx) => (
				<MarketplaceItem key={idx} path={path} href={`${hrefs[idx]}`} />
			))}
		</ul>
	)
}
