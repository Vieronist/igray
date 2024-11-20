import { ReactSVG } from "react-svg";

export const SteamBanner = () => {
  return (
    <div className="bg-[url('../public/steam-bg.png')] bg-no-repeat w-[350px] xl:w-[490px] xl:h-[306px] bg-contain bg-center h-[206px] mb-[10px] relative mx-auto">
      <ReactSVG
        src="steam-logo.svg"
        className="absolute top-[40px] left-[35px] lg:left-[50px]"
      />

      <p className="text-[white] absolute bottom-[30px] left-[35px] lg:left-[50px] glowing-text text-shadow text-[36px] xl:text-[45px] font-extrabold leading-[32.6px] md:leading-[35.6px] xl:leading-[40.6px] xl:bottom-[50px] tracking-[-0.04em] text-left decoration-skip-ink-none ">
        Пополни <br /> баланс Steam
      </p>
    </div>
  );
};
