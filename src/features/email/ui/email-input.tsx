import { IPaymentInputs } from "@/shared";
import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";


interface IProps {
  register: UseFormRegister<IPaymentInputs>;
  errors: FieldErrors<IPaymentInputs>
}


export const EmailInput: FC<IProps> = ({ register}) => {
  return (
    <div className="border-[#DDF1EA] border rounded-[18px] py-[10px] px-[15px] mb-[15px]">
      <label htmlFor="email" className="block text-gray-800">
        Электронная почта
      </label>
      <input type="text" {...register("email", { required: false })} placeholder="name@mail.com" className="outline-none" />
    </div>
  );
};
