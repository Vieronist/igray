import { ArticlesList } from "../articles/article-list";
import { SpeedPaymentBanner } from "./speed-payment-banner";
import { SteamBanner } from "./steam-banner";

interface IArticle {
	content: string;
	avatar: string;
}

export const SteamInfo = () => {
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
		<section className='flex justify-center 2xl:block gap-[5px] 2xl:gap-0 '>
			<div className='flex gap-3 items-center md:mx-auto '>
				<SteamBanner />
				<SpeedPaymentBanner className='hidden md:block 2xl:hidden' />
			</div>
			<ArticlesList articles={articles} className='hidden 2xl:block' />
		</section>
	);
};
