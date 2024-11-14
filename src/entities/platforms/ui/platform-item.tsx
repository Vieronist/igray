import { FC } from "react";

interface IProps {
  name: string;
}

export const PlatformItem: FC<IProps> = ({ name }) => {
  return <li className="text-[14px] font-medium mb-[12px] text-gray-800">{name}</li>;
};
