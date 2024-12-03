import { Header } from "@/components/user/layout/user-layout/header";
import { Container } from "@/components/user/ui/container";
import { cn } from "@/lib/utils";

import { Reviews } from "@/components/user/layout/user-layout/details/reviews";
import { Footer } from "@/components/user/layout/user-layout/footer";
import cls from "./user.module.scss";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div
			className={cn("pt-5 pb-5", cls.backgroundMain)}
			style={{
				background: "/background.jpg')",
			}}
		>
			<Container>
				<Header />

				<main>{children}</main>

				<Reviews />
				<Footer />
			</Container>
		</div>
	);
}
