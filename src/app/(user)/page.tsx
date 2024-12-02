import { ArticlesList } from "@/components/user/common/articles/article-list";
import { FaqList } from "@/components/user/common/faq-list/faq-list";
import { Replenishment } from "@/components/user/common/steams/replenishment/replenishment";
import { SpeedPaymentBanner } from "@/components/user/common/steams/speed-payment-banner";
import { SteamInfo } from "@/components/user/common/steams/steam-info";

interface IArticle {
	content: string;
	avatar: string;
}

export default function HomePage() {
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
	];

	return (
		<div className='block 2xl:flex gap-[10px] justify-between mb-[40px] md:mb-[130px]'>
			<SteamInfo />
			<Replenishment />
			<section>
				<SpeedPaymentBanner className='hidden 2xl:block' />
				<FaqList />
				<ArticlesList
					articles={articles}
					className='flex sm:justify-center md:justify-end overflow-x-auto whitespace-nowrap flex-shrink-0 xl:hidden mb-5'
				/>
			</section>
		</div>
	);
}
