import Link from "next/link";
import { ReactSVG } from "react-svg";
//
export const AboutService = () => {
  return (
    <>
      <Link
        href={"http://www.youtube.com/@%D0%98%D0%B3%D1%80%D0%B0%D0%B924"}
        className="block h-[180px] sm:h-[280px] bg-[url('/about-service-mobile.png')] md:bg-[url('/video-bg.png')] bg-no-repeat bg-cover bg-center relative rounded-[100px] w-[95%] sm:w-[80%] md:w-[60%] mx-auto lg:w-[50%]"

      >
        <p className="absolute bottom-[40px] left-[40px] text-[white] text-[20px] md:text-[30px] font-medium leading-[25.2px] tracking-tight text-left underline-from-font decoration-skip-ink-none">
          Посмотри <br /> видео <br /> о сервисе
        </p>
        <ReactSVG
          className="absolute bottom-[35px] right-[25px] lg:top-[50%] lg:right-[35%] lg:left-[50%] lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2"
          src="play-button.svg"
        />
      </Link>
    </>
  );
};
