import { ProductMenuAccardion } from '@/components/user/common/ProductMenuAccardion/ProductMenuAccardion'
import { Breadcrumbs } from '@/components/user/ui/Breadcrumbs'
import { Container } from '@/components/user/ui/Container'
import { Heading } from '@/components/user/ui/Heading'

import { publicUrl } from '@/config/page-routes/public'

export default function HomePage() {
	const breadcrumbs = [
		{ label: 'Главная', href: publicUrl.home() },
		{ label: 'pc', href: '' }
	]

	return (
		<Container size='sm'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />

			<Heading level={1} className='mb-5'>
				Игры и&nbsp;приложения для&nbsp;PC
			</Heading>

			<ProductMenuAccardion />
		</Container>
	)
}
