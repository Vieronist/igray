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
      className={`border-[#1F3238] border-opacity-10 border rounded-[18px] p-[12px] flex-1 text-center ${
        currentPaymentType === method ? "border-opacity-100" : ""
      }`}
    >
      <button>
        <ReactSVG src={svg} className="flex flex-col items-center" />
        <h5>{title}</h5>
        <p className="text-[12px] font-medium text-center text-[#AFC5BE]">
          {text}
        </p>
      </button>
    </li>
  );
};
