import { NewsList } from '@/components/user/common/news/NewsList'
import Questions from '@/components/user/common/questions/Questions'
import { Breadcrumbs } from '@/components/user/ui/Breadcrumbs'
import { Container } from '@/components/user/ui/Container'
import { Heading } from '@/components/user/ui/Heading'

import { publicUrl } from '@/config/page-routes/public'

import { news } from '@/constants/news'

export default function ContactsPage() {
	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'Частые вопросы', href: '' }
	]

	return (
		<Container>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<Heading className='mb-5 lg:mb-6' level={1}>
				Частые вопросы
			</Heading>

			<Questions />

			<NewsList className='mt-14' items={news} />
		</Container>
	)
}
