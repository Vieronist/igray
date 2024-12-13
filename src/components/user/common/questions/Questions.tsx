import { QuestionsAccardionList } from '@/components/user/ui/accardions/questions-accardion/QuestionsAccardionList'

import { questions, questionsCategories } from '@/constants/questions'

export default function Questions() {
	return (
		<>
			<div className='flex gap-2.5 mb-6 lg:mb-10 flex-nowrap overflow-x-auto'>
				<button className='py-2.5 px-4 hover:bg-primary_color hover:text-white rounded-xl border border-primary_opacity_color transition-all duration-200 shrink-0  font-medium'>
					ВСЕ
				</button>

				{questionsCategories.map(item => (
					<button
						key={item.title}
						className='py-2.5 px-4 hover:bg-primary_color hover:text-white rounded-xl border border-primary_opacity_color transition-all duration-200 shrink-0 font-medium'
					>
						{item.title.toUpperCase()}
					</button>
				))}
			</div>

			<QuestionsAccardionList items={questions} />
		</>
	)
}
