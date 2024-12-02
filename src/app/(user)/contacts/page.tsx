import { ArticlesList } from "@/components/user/common/articles/article-list";
import { ContactsPanel } from "@/components/user/common/contacts/contacts-panel";

interface IArticle {
	content: string;
	avatar: string;
}

export default function ContactsPage() {
	const articles: IArticle[] = [
		{
			content: "Как пополнить свой Steam бесплатно?",
			avatar: "gabe.png",
		},
		{
			content: "Что было на презентации Xbox 2024",
			avatar: "someone.png",
		},
		{
			avatar: "dracon.png",
			content: "Магический выживач Nightingale",
		},
		{
			avatar: "baba-v-shlyape.png",
			content: "Foamstars выйдет 6 февраля",
		},
		{
			avatar: "overwatch-baba.png",
			content: "Чарт продаж Steam захватили фритуплей",
		},
	];

	return (
		<>
			<ContactsPanel />
			<ArticlesList
				articles={articles}
				className='flex mb-[120px] overflow-x-auto'
			/>
		</>
	);
}
