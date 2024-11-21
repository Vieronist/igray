import { Currencies, IPaymentInputs } from "@/shared";
import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface IProps {
  register: UseFormRegister<IPaymentInputs>;
  errors: FieldErrors<IPaymentInputs>;
  currency: Currencies;
}

export const SteamLogin: FC<IProps> = ({ register, errors, currency }) => {
  return (
    <>
      <div className="relative">
        <div className="rounded-[18px] border-[#DDF1EA] border px-[15px] py-[5px] sm:basis-[50%] mb-[15px] sm:mb-0">
          <label htmlFor="login" className="block text-gray-800">
              {currency === "USD" ? "Контакт для связи" : "Steam Логин"}
          </label>
          <input
            type="text"
            placeholder="Name..."
            className="outline-none text-gray-800"
            id="login"
            {...register("login", { required: true })}
          />
        </div>
        {errors.login && (
          <span className="text-red-600 block text-[12px] ml-2 absolute bottom-[-2px] sm:bottom-[-18px]">
            {currency === "USD" ? "Обязательное поле" : "Steam Логин обязателен"}
          </span>
        )}
      </div>
    </>
  );
};
