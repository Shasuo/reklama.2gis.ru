import { FooterLink } from "./link";
import Image from "next/image";
export const FooterSocIcons = () => {
  const Img = ({
    alt,
    src,
    href,
  }: {
    alt: string;
    src: string;
    href: string;
  }) => {
    return (
      <a className={"block"} href={href} target={"_blank"}>
        <Image src={`/images/${src}`} width={34} height={34} alt={alt} />
      </a>
    );
  };

  return (
    <>
      <FooterLink text={"Подписывайтесь"} />
      <div className={"mt-2 flex items-start space-x-3"}>
        <Img
          href={"https://vc.ru/s/company-2gis-83849"}
          alt={"VC.RU"}
          src={"VC.RU-icon.png"}
        />
        <Img
          href={"https://t.me/Business2GIS"}
          alt={"Telegram"}
          src={"Telegram-icon.png"}
        />
        <Img href={"https://vk.com/2gis"} alt={"VK"} src={"Vk-icon.png"} />
      </div>
    </>
  );
};
