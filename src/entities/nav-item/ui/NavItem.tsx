import Link from "next/link";
import { FC } from "react";
import { useServiceStore } from "@/shared/";


interface IProps {
  label: string;
  href: string;
  className?: string;
  target?: "_blank" | "_self";
}

export const NavItem: FC<IProps> = ({ label, href, className, target }) => {

  const { setIsModalVisible } = useServiceStore()

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

     setIsModalVisible(href === "#" && true)

  };

  return (
    <li
      className={`text-[18px] sm:text-[18px] z-10 text-gray-800 ${className}`}
      onClick={handleClick}
    >
      <Link target={target !== undefined ? target : "_self"} href={href}>
        {label}
      </Link>
    </li>
  );
};
