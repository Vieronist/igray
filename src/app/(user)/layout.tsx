import { Footer } from '@/components/user/layout/user-layout/Footer'
import { Header } from '@/components/user/layout/user-layout/Header'
import { Reviews } from '@/components/user/layout/user-layout/footer/Reviews'
import { Container } from '@/components/user/ui/Container'

import { cn } from '@/utils/clsx'

import cls from './user.module.scss'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div
			className={cn('pt-5 pb-5', cls.backgroundMain)}
			style={{
				background: "/background.jpg')"
			}}
		>
			<Container>
				<Header />

				<main>{children}</main>

				<Reviews />
				<Footer />
			</Container>
		</div>
	)
}
