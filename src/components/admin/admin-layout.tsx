"use client";

import {
	Sidebar,
	SidebarFooter,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/shadcn-ui/sidebar";

import { BringToFront } from "lucide-react";

interface AdminLayoutProps {
	children: React.ReactNode;
}

const items = [
	{
		title: "Список заказов",
		url: "#",
		icon: BringToFront,
	},
];

export const AdminLayout = (props: AdminLayoutProps) => {
	const { children } = props;

	return (
		<div>
			<SidebarProvider>
				<Sidebar>
					<SidebarHeader />
					<SidebarGroupLabel>Админ панель</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild isActive={true}>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
					<SidebarFooter />
				</Sidebar>
				<main className='p-4 w-full'>
					<SidebarTrigger />

					{children}
				</main>
			</SidebarProvider>
		</div>
	);
};
