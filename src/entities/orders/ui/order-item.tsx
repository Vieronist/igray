import { IOrderItem } from "@/shared";
import { FC } from "react";

export const OrderItem: FC<IOrderItem> = ({
  email,
  login,
  amount,
  date,
  order_id
}) => {
  return (
    <li className="mb-2 border-gray-800 border-2 p-2 rounded-lg">
      <div>
        <span className="text-gray-800">id: {order_id}</span>
      </div>
      <div className="text-gray-800">email: {email}</div>
      <div className="text-gray-800">steam: {login}</div>
      <div className="text-gray-800">amount: {amount.toFixed(2)} $</div>
      <p className="text-gray-800">date: {date}</p>
    </li>
  );
};
