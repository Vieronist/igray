import Image from "next/image";
import { FC } from "react";

interface IProps {
	content: string;
	avatar: string;
}

export const ArticleItem: FC<IProps> = ({ content, avatar }) => {
	return (
		<li className=' flex flex-col md:flex-row justify-center items-center w-[280px] text-balance text-[16px] '>
			<Image
				className=''
				src={`/${avatar}`}
				height={120}
				width={120}
				alt='icon'
			/>
			<p className='w-[180px] text-gray-800 text-center xl:text-left'>
				{content}
			</p>
		</li>
	);
};
