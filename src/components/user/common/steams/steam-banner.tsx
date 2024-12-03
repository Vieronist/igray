"use client";

import { cn } from "@/lib/utils";
import { ReactSVG } from "react-svg";

export const SteamBanner = () => {
	return (
		<div
			className={cn(
				"bg-[url('/steam-bg.png')] w-full bg-no-repeat bg-cover  md:w-[490px] md:h-[306px]  bg-center  rounded-[40px] h-[206px] mb-[10px] relative mx-auto"
			)}
			//
		>
			<ReactSVG
				src='steam-logo.svg'
				className='absolute top-[40px] left-[35px] lg:left-[50px]'
			/>

			<p className='font-steppe font-extrabold text-[white] absolute bottom-[30px] left-[35px] lg:left-[50px] glowing-text text-shadow text-[36px] xl:text-[45px] leading-[32.6px] md:leading-[35.6px] xl:leading-[40.6px] xl:bottom-[50px] tracking-[-0.04em] text-left decoration-skip-ink-none'>
				Пополни <br /> баланс Steam
			</p>
		</div>
	);
};
