import Link from "next/link";
import { ReactSVG } from "react-svg";
//
export const AboutService = () => {
  return (
    <>
      <Link
        href={"http://www.youtube.com/@%D0%98%D0%B3%D1%80%D0%B0%D0%B924"}
        className="block w-[50%] h-[280px] bg-[url('../public/video-bg.png')] bg-no-repeat bg-cover bg-center relative rounded-[100px]"
      >
        <p className="absolute bottom-[40px] left-[40px] text-[white] text-2xl font-medium leading-[35.2px] tracking-tight text-left underline-from-font decoration-skip-ink-none">
          Посмотри <br /> видео <br /> о сервисе
        </p>
        <ReactSVG
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          src="play-button.svg"
        />
      </Link>
    </>
  );
};
