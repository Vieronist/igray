import { publicUrl } from '@/config/page-routes/public'

export interface NavigationItem {
	href: string
	label: string
}

export const navigations: NavigationItem[] = [
	{
		href: publicUrl.steam(),
		label: 'PC'
	},
	{
		href: '#',
		label: 'Xbox'
	},
	{
		href: '#',
		label: 'PlayStation'
	},
	{
		href: '#',
		label: 'Nintendo'
	},
	{
		href: '#',
		label: 'Mobile'
	}
]
