import { BlockTitle } from "@/components/parentComponents/footer/blockTitle";
import {
  footerContentBlock,
  footerContentBlock_data,
} from "@/components/parentComponents/footer/footerData";
import { DefaultOutput } from "@/components/parentComponents/footer/defaultOutput";
import { FooterSocIcons } from "@/components/parentComponents/footer/footerSocIcons";
import { useState } from "react";

export const ContentBlock = ({
  data,
  secBlock,
  fIcons,
}: {
  data: footerContentBlock;
  secBlock?: footerContentBlock_data[];
  fIcons?: boolean;
}) => {
  const [show, setShow] = useState(false);
  const generalClasses = `${show ? "mobile:block" : "mobile:hidden"} mobile:pb-3 mobile:ml-2 mobile:mt-2 mt-6`;
  return (
    <section>
      <BlockTitle
        text={data.blockName}
        returnState={() => setShow(!show)}
        state={show}
      />
      {secBlock ? (
        <div className={`${generalClasses} flex items-start`}>
          <div className={"space-y-3"}>
            <DefaultOutput data={data.data} />
          </div>
          <div className={"mobile:ml-0 mobile:mt-3 space-y-3 ml-5"}>
            <DefaultOutput data={secBlock} />
          </div>
        </div>
      ) : (
        <div className={`${generalClasses} space-y-3`}>
          <DefaultOutput data={data.data} />
          {fIcons ? (
            <div className={"mobile:hidden pt-8"}>
              <FooterSocIcons />
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
};
