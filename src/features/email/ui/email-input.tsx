import { IPaymentInputs } from "@/shared";
import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface IProps {
  register: UseFormRegister<IPaymentInputs>;
  errors: FieldErrors<IPaymentInputs>;
}

export const EmailInput: FC<IProps> = ({ register, errors }) => {
  return (
    <>
      <div className="border-[#DDF1EA] border rounded-[18px] py-[10px] px-[15px] ">
        <label htmlFor="email" className="block text-gray-800">
          Электронная почта
        </label>
        <input
          type="text"
          {...register("email", { required: true })}
          placeholder="name@mail.com"
          className="outline-none"
        />
      </div>
      <p className="mb-[15px]">
        {errors.email && (
          <span className="text-red-600 text-[12px] ml-2">
            Электронная почта обязательна
          </span>
        )}
      </p>
    </>
  );
};
