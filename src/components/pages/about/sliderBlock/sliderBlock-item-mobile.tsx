import Image from "next/image";
import { SliderBlockTooltipButton } from "./sliderBlock-tooltipButton";
import { SliderBlockTooltip } from "./sliderBlock-tooltip";

import { sliderBlockItem } from "@/components/pages/about/data/sliderBlocks";
import { SliderItemTextBlock } from "@/components/pages/about/sliderBlock/sliderBlock-item-textBlock";
import { useState } from "react";

export const SliderBlockItemMobile = ({ data }: { data: sliderBlockItem }) => {
  const initialTooltip = {
    active: false,
    title: "",
    content: "",
    mt: 0,
    index: 0,
  };
  const [activeTooltip, setActiveTooltip] = useState(initialTooltip);

  const setInitialTooltip = () => setActiveTooltip(initialTooltip);
  return (
    <div className={"mobile:block hidden relative"}>
      <Image
        src={`/images/${data.mobileImage}`}
        width={259}
        height={523.84}
        alt={"Макет приложения"}
        className={"block mx-auto"}
      />
      <h4 className={"text-center mt-5 font-medium text-base leading-6"}>
        {data.subImageText}
      </h4>
      <SliderBlockTooltip
        mt={activeTooltip.mt}
        title={activeTooltip.title}
        content={activeTooltip.content}
        active={activeTooltip.active}
        click={setInitialTooltip}
      />
      {data.data.map((el: SliderItemTextBlock, index: number) => (
        <SliderBlockTooltipButton
          key={index}
          data={{
            index: index,
            mt: el.mobileMt,
            ml: el.mobileMl,
          }}
          click={() => {
            if (index + 1 === activeTooltip.index && activeTooltip.active) {
              setInitialTooltip();
            } else {
              setActiveTooltip({
                active: true,
                title: el.title,
                content: el.text,
                mt: el.mobileMt ? el.mobileMt : 0,
                index: index + 1,
              });
            }
          }}
        />
      ))}
    </div>
  );
};
