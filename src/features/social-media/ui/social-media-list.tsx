import { SocialMediaItem } from "@/entities/social-media";

export const SocialMediaList = () => {
  return (
    <ul className="md:grid grid-rows-2 grid-cols-4 gap-[15px] gap-x-12 hidden">
      <SocialMediaItem href="" svg={"aliexpress.svg"} name={"Aliexpress"} />
      <SocialMediaItem href="" svg={"instagram.svg"} name={"Instagram"} />
      <SocialMediaItem href="" svg={"tg.svg"} name={"Telegram"} />
      <SocialMediaItem href="" svg={"avito.svg"} name={"Avito"} />
      <SocialMediaItem href="" svg={"yt.svg"} name={"YouTube"} />
      <SocialMediaItem href="" svg={"vk.svg"} name={"Вконтаке"} />
      <SocialMediaItem href="" svg={"whatsapp.svg"} name={"WhatsApp"} />
      <SocialMediaItem href="" svg={"wb.svg"} name={"WildBerries"} />
    </ul>
  );
};
