import { ReactSVG } from "react-svg";
import Image from "next/image";
import { FC } from "react";

interface IProps {
  className?: string;
}

export const SpeedPaymentBanner: FC<IProps> = ({ className }) => {
  return (
    <div className={`relative p-4 mb-[15px] ${className}`}>
      <div className="absolute inset-0 rounded-[60px] border-[17px] border-transparent bg-gradient-to-r from-[#62CEA6] via-[#72F2C1] to-[#66D7AD]"></div>
      <div className="relative bg-white rounded-[43px] p-16 z-10">
        <ReactSVG src="speed.svg" className="mb-[20px]" />
        <Image
          className="absolute top-[-51px] right-[105px]"
          height={118}
          width={108}
          alt="lighting"
          src={"/lighting.png"}
        />

        <div className="md:w-[250px]">
          <h6 className="font-extrabold text-[22px] leading-[22px] tracking-[-0.04em] mb-[17px]">
            Моментальное <br /> пополнение за 2 минуты
          </h6>
          <p className="text-[#A3BDB5]">
            Покупай желанные игры в два клика, без ожиданий и лишних действий на
            сервисе ИгРай
          </p>
        </div>
      </div>
    </div>
  );
};
