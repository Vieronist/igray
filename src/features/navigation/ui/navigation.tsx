import { NavItem } from "@/entities/nav-item";
import { FC } from "react";

interface IProps {
  className?: string
}

export const Navigation: FC<IProps> = ({className}) => {
  return (
    <>
      <ul className={`${className}`}>
        <NavItem href="/pc" label="PC" />
        <NavItem href="/xbox" label="Xbox" />
        <NavItem href="/playstation" label="PlayStation" />
        <NavItem href="/nintendo" label="Nintendo" />
        <NavItem href="/mobile" label="Mobile" />
      </ul>
    </>
  );
};
