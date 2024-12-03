import Image from "next/image";
import { FC } from "react";

interface IProps {
	content: string;
	avatar: string;
}

export const ArticleItem: FC<IProps> = ({ content, avatar }) => {
	return (
		<li className='flex gap-4 flex-col md:flex-row justify-center items-center w-[307px] text-balance text-[16px] '>
			<div className='p-1 flex-shrink-0'>
				<Image
					className='w-[112px] h-[112px]'
					src={`/${avatar}`}
					height={120}
					width={120}
					alt='icon'
				/>
			</div>

			<p className='w-[180px] lg:w-auto text-center md:text-left leading-5 font-medium text-base'>
				{content}
			</p>
		</li>
	);
};
