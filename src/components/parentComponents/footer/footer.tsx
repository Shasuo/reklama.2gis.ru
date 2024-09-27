import Image from "next/image";
import {
  AdvertisingOn2GISMaps,
  OtherProducts,
  ForUsers,
  Company,
  TermsOfUse,
} from "./footerData";

import { ContentBlock } from "@/components/parentComponents/footer/contentBlock";
import { BottomLine } from "./bottomLine";
import { FooterSocIcons } from "@/components/parentComponents/footer/footerSocIcons";

export const Footer = () => {
  return (
    <footer
      className={
        "mobile:pt-6 mobile:mt-16 mt-[105px] bg-white pt-[45px] box-border"
      }
    >
      <main className={"mobile:pb-5 pb-16"}>
        <Image
          src={"/images/footer-2GIS.png"}
          width={137}
          height={47}
          alt={"2ГИС"}
        />
        <div
          className={
            "mobile:block mobile:mt-10 mt-7 flex justify-between items-start"
          }
        >
          <ContentBlock data={AdvertisingOn2GISMaps} />
          <ContentBlock data={OtherProducts} secBlock={ForUsers} />
          <ContentBlock data={Company} />
          <ContentBlock data={TermsOfUse} fIcons />
        </div>
        <div className={"mobile:block hidden mt-10"}>
          <FooterSocIcons />
        </div>
      </main>
      <BottomLine />
    </footer>
  );
};
