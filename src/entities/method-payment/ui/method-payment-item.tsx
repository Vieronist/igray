import { PaymentMethods } from "@/shared";
import { FC } from "react";
import { ReactSVG } from "react-svg";

interface IProps {
  svg: string;
  text: string;
  title: string;
  onChange: (method: PaymentMethods) => void;
  currentPaymentType: PaymentMethods;
  method: PaymentMethods;
}

export const MethodPaymentItem: FC<IProps> = ({
  svg,
  text,
  title,
  onChange,
  method,
  currentPaymentType,
}) => {
  return (
    <li
      onClick={() => onChange(method)}
      className={`border-[#1F3238] border-opacity-10 border  rounded-[18px] p-[15px] md:basis-[45%] text-center ${
        currentPaymentType === method ? "border-opacity-100" : ""
      }`}
    >
      <button className="flex sm:flex-col sm:items-center sm:w-full gap-[15px] sm:gap-[6px] ">
        <ReactSVG src={svg} className="flex flex-col items-center" />
        <div className="text-left sm:text-center">
          <h5 className="text-gray-800 md:text-center">{title}</h5>
          <p className="text-[12px] md:w-[120px] font-medium text-center text-[#AFC5BE]">
            {text}
          </p>
        </div>
      </button>
    </li>
  );
};
