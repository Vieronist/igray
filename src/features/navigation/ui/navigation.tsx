import { NavItem } from "@/entities/nav-item";
import { FC } from "react";

interface IProps {
  className?: string
}



export const Navigation: FC<IProps> = ({className}) => {
  return (
    <>
      <ul className={`${className}`}>
        {
          ["PC","Xbox","PlayStation","Nintendo","Mobile"].map((link, idx) => <NavItem href={`/${link}`} label={link} key={idx} />)
        }
      </ul>
    </>
  );
};
