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
    <div className="border-[#DDF1EA] border rounded-[18px] flex px-3 py-3 pl-5 w-full mb-5">
      <div className="flex-grow w-[20%]">
        <label className="block text-[12px] text-gray-800 mb-2" htmlFor="promo">
          У вас есть промокод?
        </label>
        <input
          id="promo"
          type="text"
          placeholder="Уменьши комиссию..."
          className="outline-none text-[16px] sm:text-[20px] p-0 bg-transparent"
          onChange={handleChangeValue}
        />
      </div>
      <button
        onClick={() => checkPromo(promoValue)}
        className="bg-[#E4FAF3] rounded-[14px] py-[15px] px-[12px] sm:w-auto sm:px-[12px] sm:py-[15px] flex-shrink-0 text-gray-800"
      >
        {discount ? `Ваша скидка - ${discount} %` : "Применить"}
      </button>
    </div>
  );
};
