import { SocialMediaItem } from "@/entities/social-media";

export const SocialMediaList = () => {
  return (
    <ul className="md:grid grid-rows-2 grid-cols-4 gap-[15px] gap-x-12 hidden">
      <SocialMediaItem svg={"dzen.svg"} name={"Dzen"} />
      <SocialMediaItem svg={"instagram.svg"} name={"Instagram"} />
      <SocialMediaItem svg={"tg.svg"} name={"Telegram"} />
      <SocialMediaItem svg={"tt.svg"} name={"TikTok"} />
      <SocialMediaItem svg={"yt.svg"} name={"YouTube"} />
      <SocialMediaItem svg={"vk.svg"} name={"Вконтаке"} />
      <SocialMediaItem svg={"whatsapp.svg"} name={"WhatsApp"} />
      <SocialMediaItem svg={"twitch.svg"} name={"Twitch"} />
    </ul>
  );
};
