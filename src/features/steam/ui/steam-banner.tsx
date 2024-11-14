import { ReactSVG } from "react-svg";

export const SteamBanner = () => {
  return (
    <div className="bg-[url('../public/steam-bg.png')] bg-no-repeat w-[320px] lg:w-[490px] bg-contain bg-center h-[306px] mb-[10px] relative mx-auto">
      <ReactSVG
        src="steam-logo.svg"
        className="absolute top-[78px] left-[35px]"
      />

      <p className="text-[white] absolute bottom-[80px] left-[35px] glowing-text text-shadow text-[26px] lg:text-[45px] font-extrabold leading-[26.6px] md:leading-[25.6px] lg:leading-[45.6px] lg:bottom-[50px] tracking-[-0.04em] text-left decoration-skip-ink-none ">
        Пополни <br /> баланс Steam
      </p>
    </div>
  );
};
