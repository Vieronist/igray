import Link from "next/link";
import Image from "next/image";
import { NavItem } from "@/entities/nav-item";

export const Navigation = () => {
  return (
    <>
      <Link href={"/"}>
        <Image width={200} height={200} alt="logo" src={"/logo.png"} />
      </Link>
      <ul className="flex gap-[30px]">
        <NavItem href="/pc" label="PC" />
        <NavItem href="/xbox" label="Xbox" />
        <NavItem href="/playstation" label="PlayStation" />
        <NavItem href="/nintendo" label="Nintendo" />
        <NavItem href="/mobile" label="Mobile" />
      </ul>
    </>
  );
};
