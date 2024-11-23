import { FC, useState } from "react";

interface IProps {
  checkPromo: (code: string) => void;
  discount: number;
}

export const PromoInput: FC<IProps> = ({ checkPromo, discount }) => {
  const [promoValue, setPromoValue] = useState("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoValue(e.target.value);
  };

  return (
    <div className="border-[#DDF1EA] border rounded-[18px] flex items-center px-3 pt-3 pb-2 pl-3 w-full mb-5">
      <div className="flex-grow w-[20%]">
        <label className="block text-[12px] sm:text-[16px] text-gray-800 tracking-tighter" htmlFor="promo">
          У вас есть промокод?
        </label>
        <input
          id="promo"
          type="text"
          placeholder="Уменьши комиссию..."
          className="outline-none p-0 bg-transparent block text-gray-800 text-[14px] sm:text-[22px]"
          onChange={handleChangeValue}
        />
      </div>
      <button
        onClick={() => checkPromo(promoValue)}
        type="button"
        className="bg-[#E4FAF3] rounded-[14px] py-[15px] px-[12px] sm:w-auto sm:px-[12px] sm:py-[15px] flex-shrink-0 text-gray-800"
      >
        {discount ? `Ваша скидка - ${discount} %` : "Применить"}
      </button>
    </div>
  );
};
