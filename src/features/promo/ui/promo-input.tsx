import { FC, useState } from "react";

interface IProps {
  checkPromo: (code: string) => void;
  discount: number
}

export const PromoInput: FC<IProps> = ({ checkPromo, discount }) => {
  const [promoValue, setPromoValue] = useState("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoValue(e.target.value);
  };

  return (
    <div className="border-[#DDF1EA] border rounded-[18px]  py-3 pl-5 pr-2 flex justify-between items-center mb-5">
      <div>
        <label className="block text-[12px]" htmlFor="promo">
          У вас есть промокод?
        </label>
        <input
          id="promo"
          type="text"
          placeholder="Уменьши комиссию..."
          className="outline-none p-0 bg-transparent"
          onChange={handleChangeValue}
        />
      </div>
      <button
        onClick={() => checkPromo(promoValue)}
        className="bg-[#E4FAF3] rounded-[14px] py-[15px] px-[20px]"
      >
        {discount ? `Ваша скидка - ${discount} %` : "Применить"}
      </button>
    </div>
  );
};
