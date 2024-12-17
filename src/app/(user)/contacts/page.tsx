import { ContactsPanel } from '@/components/user/common/contacts/ContactsPanel'
import { NewsList } from '@/components/user/common/news/NewsList'
import { Breadcrumbs } from '@/components/user/ui/Breadcrumbs'
import { Container } from '@/components/user/ui/Container'
import { Heading } from '@/components/user/ui/Heading'

import { publicUrl } from '@/config/page-routes/public'

import { news } from '@/constants/news'

export default function ContactsPage() {
	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'Контакты', href: '' }
	]

	return (
		<Container>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<Heading className='mb-5 lg:mb-6' level={1}>
				Наши контакты
			</Heading>
			<ContactsPanel className='mb-24' />
			<NewsList items={news} />
		</Container>
	)
}
