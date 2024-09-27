import { FirstScreen } from "./firstScreen/firstScreen";
import { SliderBlock } from "./sliderBlock/sliderBlock";
import { FirstBlock, SecondBlock, ThirdBlock } from "./data/sliderBlocks";
import { GISmainForm } from "@/components/reusedComponents/2GISmainForm/2GISmainForm";
export const AboutPage = () => {
  return (
    <section>
      <FirstScreen />
      <main>
        <SliderBlock data={FirstBlock} />
        <SliderBlock data={SecondBlock} />
        <SliderBlock data={ThirdBlock} />
        <GISmainForm />
      </main>
    </section>
  );
};
