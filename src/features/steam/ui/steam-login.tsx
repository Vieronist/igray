import { IPaymentInputs } from "@/shared";
import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface IProps {
  register: UseFormRegister<IPaymentInputs>;
  errors: FieldErrors<IPaymentInputs>;
}

export const SteamLogin: FC<IProps> = ({ register, errors }) => {
  return (
    <>
      <div className="rounded-[18px] border-[#DDF1EA] border px-[15px] py-[5px] sm:basis-[50%] mb-[5px] sm:mb-0">
        <label htmlFor="login" className="block text-gray-800">
          Steam логин
        </label>
        <input
          type="text"
          placeholder="Name..."
          className="outline-none"
          id="login"
          {...register("login", { required: true })}
        />
      </div>
      {errors.login && (
        <span className="text-red-600 text-[12px] ml-2">
          Steam логин обязательный
        </span>
      )}
    </>
  );
};
