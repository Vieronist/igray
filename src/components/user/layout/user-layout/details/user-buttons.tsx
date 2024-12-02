"use client";

import { ReactSVG } from "react-svg";
import { UserButton } from "./user-button";

export const UserButtons = () => {
	return (
		<ul className='flex gap-2'>
			<li
				className={`block md:hidden p-[4px] sm:p-[10px] rounded-[18px] bg-gradient-to-r from-[#E4FAF3] via-[rgba(228,250,243,0.29)] to-[#E4FAF3]`}
			>
				<button className=''>
					<ReactSVG src={"lupa.svg"} />
				</button>
			</li>

			<UserButton className='' path='HeartStraight.svg' />
			<UserButton className='' path='user.svg' />
			<UserButton className='' path='ShoppingCart.svg' />
		</ul>
	);
};
