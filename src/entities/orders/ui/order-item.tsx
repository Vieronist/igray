import { IOrderItem } from "@/shared";
import { FC } from "react";

export const OrderItem: FC<IOrderItem> = ({
  email,
  login,
  amount,

  date,
}) => {
  return (
    <li className="mb-2 border-gray-800 border-2 p-2 rounded-lg">
      <div>email: {email}</div>
      <div>steam: {login}</div>
      <div>amount: {amount}</div>
      <p>date: {date}</p>
    </li>
  );
};
