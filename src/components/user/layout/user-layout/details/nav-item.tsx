"use client";

import { useServiceStore } from "@/store/service.store";
import Link from "next/link";
import { FC } from "react";

interface IProps {
	label: string;
	href: string;
	className?: string;
	target?: "_blank" | "_self";
}

export const NavItem: FC<IProps> = ({ label, href, className, target }) => {
	const { setIsModalVisible } = useServiceStore();

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();

		setIsModalVisible(href === "#" && true);
	};

	return (
		<li
			className={`text-base hover:text-secondary_color  z-10 text-gray-800 ${className}`}
			onClick={handleClick}
		>
			{href === "#" ? (
				<button className=''>{label}</button>
			) : (
				<Link target={target !== undefined ? target : "_self"} href={href}>
					{label}
				</Link>
			)}
		</li>
	);
};
