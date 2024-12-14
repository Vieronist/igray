import { Feedback } from './Feedback'
import { VideoReview } from './VideoReview'

export const Reviews = () => {
	return (
		<div>
			<div className='grid grid-cols-2 grid-rows-4 gap-2'>
				<Feedback
					text='Самый удобный сервис
            для пополнения Стима🔥Купила уже 9 игр! '
					userName='MartinaStrike'
					date='Сен 13, 2023'
				/>

				<Feedback
					text='Хороший магазин рекомендую. Делают все за минут 20👍'
					userName='AlexandraNovak'
					date='Сен 13, 2023'
				/>

				<Feedback
					text='Отличный продавец! Все работает, все понравилось!!! Спасибо'
					userName='Александр'
					date='Сен 13, 2023'
				/>

				<VideoReview className='row-span-1' />
			</div>
		</div>
	)
}
