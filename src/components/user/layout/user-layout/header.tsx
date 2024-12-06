import Image from "next/image";
import Link from "next/link";
import { Navigation } from "./details/navigation";
import { SearchPanel } from "./details/search-panel";
import { UserButtons } from "./details/user-buttons";

export const Header = () => {
	return (
		<header className='max-w-[1360px] mb-[13px] md:mb-[36px] mx-auto w-full'>
			<div className='flex items-center rounded-[40px] justify-between px-[12px] py-[10px] md:p-[20px] bg-white md:gap-[15px] mb-[10px] gap-[15px]'>
				<Link href='/'>
					<Image
						className='w-[150px] lg:w-[210px]'
						width={150}
						height={200}
						alt='logo'
						src='/logo.svg'
					/>
				</Link>

				<Navigation className='hidden xl:flex xl:gap-[25px] 2xl:gap-[30px] xs:gap-[5px]' />

				<div className='flex gap-3 flex-shrink-0'>
					<SearchPanel />

					<UserButtons />
				</div>
			</div>

			<Navigation className='flex justify-between w-full sm:w-[70%] md:w-[60%] xl:hidden mx-auto ' />
		</header>
	);
};
