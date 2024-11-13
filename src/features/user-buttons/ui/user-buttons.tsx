import { UserButton } from "@/entities/user-button";
import { ReactSVG } from "react-svg";

export const UserButtons = () => {
  return (
    <ul className="flex gap-2">
      <li
        className={`block md:hidden p-[10px] rounded-[18px] bg-gradient-to-r from-[#E4FAF3] via-[rgba(228,250,243,0.29)] to-[#E4FAF3]`}
      >
        <button className="">
          <ReactSVG src={"lupa-big.svg"} />
        </button>
      </li>
      <UserButton className="" path="HeartStraight.svg" />
      <UserButton className="" path="user.svg" />
      <UserButton className="" path="ShoppingCart.svg" />
    </ul>
  );
};
