import { cn } from '@/utils/clsx'

import { Contacts } from './Contacts'
import { MarketPlaceItem } from './MarketPlaceItem'

const socialNetwork = [
	{
		iconName: 'vk',
		link: 'https://vk.com/igray24'
	},
	{
		iconName: 'tg',
		link: 'https://t.me/igray247'
	}
]

const marketplaces = [
	{
		name: 'Каталог',
		iconName: '/images/icons/avito-full.svg',
		link: 'https://avito.ru/brands/igray24'
	},
	{
		name: 'Каталог',
		iconName: '/images/icons/plati-full.svg',
		link: 'https://plati.market/seller/x-shop-174/1050934/'
	},
	{
		name: 'Каталог',
		iconName: '/images/icons/telegram-logo-big.png',
		link: 'https://t.me/Igray24_bot'
	},
	{
		name: '7 921 подписчик',
		iconName: '/images/icons/vk-full.svg',
		link: 'https://vk.com/igray24'
	},
	{
		name: 'Каталог',
		iconName: '/images/icons/aliexpress-full.svg',
		link: 'https://aliexpress.ru/store/1100219963?spm=a2g38.sc_product_list.0.0.252d2304G11LgS'
	},
	{
		name: 'Каталог',
		iconName: '/images/icons/wb-full.svg',
		link: 'https://www.wildberries.ru/seller/833104'
	}
]

interface ContactsPanelProps {
	className?: string
}

export const ContactsPanel = (props: ContactsPanelProps) => {
	const { className } = props

	return (
		<div className={cn('xl:flex xl:gap-2.5', className)}>
			<div className='flex flex-col md:flex-row gap-3.5 mb-2.5 xl:mb-0 flex-shrink-0'>
				<Contacts
					className='md:w-[50%]'
					title='Заказы'
					phone='+7 919 346-11-58'
					schedule='Пн - Вс:с 9:00-23:00 по МСК'
					email='igraem247@gmail.com'
					socialNetwork={socialNetwork}
				/>

				<Contacts
					className='md:w-[50%] '
					title='Сотрудничество'
					phone='+7 919 346-11-58'
					schedule='Пн - Вс:с 9:00-23:00 по МСК'
					email='igraem247@gmail.com'
					socialNetwork={socialNetwork.slice(1)}
				/>
			</div>

			<div className='grid grid-cols-2 gap-2.5 xl:grid-cols-3 xl:w-full'>
				{marketplaces.map(marketplace => (
					<MarketPlaceItem
						key={marketplace.name}
						name={marketplace.name}
						iconName={marketplace.iconName}
						link={marketplace.link}
					/>
				))}
			</div>
		</div>
	)
}
