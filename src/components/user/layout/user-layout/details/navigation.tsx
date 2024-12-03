"use client";

import { FC } from "react";
import { NavItem } from "./nav-item";

interface IProps {
	className?: string;
}

export const Navigation: FC<IProps> = ({ className }) => {
	return (
		<>
			<ul className={`${className}`}>
				{["PC", "Xbox", "PlayStation", "Nintendo", "Mobile"].map(
					(link, idx) => (
						<NavItem
							className='text-base hover:text-gray-400 active:text-gray-400 transition-colors duration-300'
							href={`#`}
							label={link}
							key={idx}
						/>
					)
				)}
			</ul>
		</>
	);
};
