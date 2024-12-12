import { Footer } from '@/components/user/layout/user-layout/Footer'
import { Header } from '@/components/user/layout/user-layout/Header'
import { Reviews } from '@/components/user/layout/user-layout/footer/Reviews'
import { Container } from '@/components/user/ui/Container'

import { cn } from '@/utils/clsx'

import styles from './user.module.scss'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div
			className={cn('pt-5 pb-5', styles.backgroundMain)}
			style={{
				background: "/images/background.jpg')"
			}}
		>
			<Container size='xl'>
				<Header />

				<main className='mb-20'>{children}</main>

				<Reviews />
				<Footer />
			</Container>
		</div>
	)
}
