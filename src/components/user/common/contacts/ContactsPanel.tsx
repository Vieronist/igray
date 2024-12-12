import { MarketplacesList } from '../market-place/MarketPlaseList'

import { Contacts } from './Contacts'

export const ContactsPanel = () => {
	return (
		<section className='mb-[50px] xl:mb-[120px] mx-auto'>
			<h3 className='font-extrabold font-steppe text-[36px] sm:text-[46px] text-center xl:text-left mb-[27px] text-gray-800'>
				Наши контакты
			</h3>
			<div className='flex flex-col xl:flex-row gap-2'>
				<div className='flex flex-wrap md:flex-nowrap gap-2 mx-auto xl:w-[51%]'>
					<Contacts
						title='Заказы'
						phone='+7 919 346-11-58'
						schedule='Пн - Вс:с 9:00-23:00 по МСК'
						email='igraem247@gmail.com'
						svgs={['images/icons/vk.svg', 'images/icons/tg.svg']}
					/>

					<Contacts
						title='Сотрудничество'
						phone='+7 919 346-11-58'
						schedule='Пн - Вс:с 9:00-23:00 по МСК'
						email='igraem247@gmail.com'
						svgs={['images/icons/tg.svg']}
					/>
				</div>

				<MarketplacesList />
			</div>
		</section>
	)
}
