import { ReactSVG } from "react-svg";

export const SteamBanner = () => {
  return (
    <div className="bg-[url('../public/steam-bg.png')] bg-no-repeat w-[320px] md:w-[370px] bg-contain bg-center h-[306px] mb-[10px] relative">
      <ReactSVG src="steam-logo.svg" className="absolute top-[88px] left-5" />

      <p className="text-[white] absolute bottom-[80px] left-[15px] glowing-text text-shadow text-[26px] md:text-[35px] font-extrabold leading-[29.6px] tracking-[-0.04em] text-left decoration-skip-ink-none ">
        Пополни <br /> баланс Steam
      </p>
    </div>
  );
};
