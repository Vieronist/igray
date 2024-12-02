import Link from "next/link";
import { FC } from "react";

interface IProps {
	name: string;
	href: string;
	onClick: (href: string) => void;
}

export const PlatformItem: FC<IProps> = ({ name, href, onClick }) => {
	return (
		<li
			onClick={() => onClick(href)}
			className='text-[14px] font-medium mb-[12px] text-gray-800 hover:text-gray-400 active:text-gray-400 transition-colors duration-300'
		>
			{href === "#" ? (
				<button>{name}</button>
			) : (
				<Link
					target={href === "#" ? "_self" : "_blank"}
					href={href === "#" ? "" : href}
				>
					{name}
				</Link>
			)}
		</li>
	);
};
