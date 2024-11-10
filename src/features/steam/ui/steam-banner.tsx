import { ReactSVG } from "react-svg";

export const SteamBanner = () => {
  return (
    <div className="bg-[url('../public/steam-bg.png')] bg-no-repeat w-[490px] h-[306px] bg-cover relative mb-[10px]">
      <ReactSVG
        src="steam-logo.svg"
        className="absolute top-[60px] left-[60px]"
      />

      <p className="left-[60px] bottom-[50px] absolute text-[white] glowing-text text-shadow text-[46px] font-extrabold leading-[50.6px] tracking-[-0.04em] text-left decoration-skip-ink-none">
        Пополни <br /> баланс Steam
      </p>
    </div>
  );
};
