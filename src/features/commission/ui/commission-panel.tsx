import { Currencies, symbols } from "@/shared";
import { FC } from "react";

interface IProps {
  currency: Currencies;
}
export const CommissionPanel: FC<IProps> = ({ currency }) => {
  const commissions = {
    RUB: [
      {
        commission: 22,
        price: 100,
      },
      {
        commission: 20,
        price: 1000,
      },
      {
        commission: 18,
        price: 3000,
      },
    ],
    KZT: [
      {
        commission: 22,
        price: 500,
      },
      {
        commission: 20,
        price: 5000,
      },
      {
        commission: 18,
        price: 15000,
      },
    ],
    USD: [
      {
        commission: 22,
        price: 5,
      },
      {
        commission: 20,
        price: 10,
      },
      {
        commission: 18,
        price: 30,
      },
    ],
  };

  return (
    <div className="mb-5">
      <h5 className="text-[#AFC5BE] text-[12px] font-medium mb-5">Комиссия</h5>
      <div className="rounded-[18px] bg-[#66D8AD] flex">
        <div className="basis-1/3 py-2 px-5 z-30">
          <p className="text-gray-800">
            {commissions[currency][0].commission} %
          </p>
          <span className="text-gray-800 inline-block px-2 rounded-[8px]  bg-[white]">
            {commissions[currency][0].price} {symbols[currency]}
          </span>
        </div>
        <div className="flex flex-1 bg-[#72F2C1] rounded-[18px] ">
          <div className="basis-1/2 py-2 px-5   z-20">
            <p className="text-gray-800">
              {commissions[currency][1].commission} %
            </p>
            <span className="text-gray-800 inline-block px-2 rounded-[8px] bg-[white]">
              {commissions[currency][1].price} {symbols[currency]}
            </span>
          </div>
          <div className="basis-1/2 py-2 px-4 bg-[#93FFD4] rounded-[18px]  z-10">
            <p className="text-gray-800">
              {commissions[currency][2].commission} %
            </p>
            <span className="text-gray-800 inline-block px-2 rounded-[8px] bg-white">
              {commissions[currency][2].price} {symbols[currency]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
