import { Navigation } from "@/features/navigation";
import { SearchPanel } from "@/features/search-panel";
import { UserButtons } from "@/features/user-buttons";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="mb-[6px] md:mb-[36px]">
    <div className="flex items-center rounded-[40px] justify-between px-[12px] py-[10px] md:p-[20px] bg-white md:gap-[5px] mb-[10px] gap-[15px]">
      <Link href="/">
        <Image width={140} height={200} alt="logo" src="/logo.png" />
      </Link>
      <Navigation className="hidden xl:flex xl:gap-[25px] 2xl:gap-[30px] xs:gap-[5px]" />
      <div className="flex gap-[15px] max-[1410px]:gap-[26px]">
        <SearchPanel
          classNameInput="w-full"
          classNameDiv="gap-[15px] hidden md:flex md:items-center md:w-[250px] lg:w-[300px] px-5"
        />
        <UserButtons />
      </div>
    </div>
    <Navigation className="flex justify-between w-full sm:w-[75%] md:w-[50%] xl:hidden mx-auto " />
  </header>
  );
};
