import { FirstScreen } from "./firstScreen/firstScreen";
import { AdvertisingNumbers } from "./advertisingNumbers/advertisingNumbers";
import { CustomInfoBlock } from "./customInfoBlock/customInfoBlock";
import { customBlock_first, customBlock_second } from "./dataFiles/data";
import { OnUsersPass } from "./onUsersPass/onUsersPass";
import { WhatDoesAdvertisingProvide } from "./WhatDoesAdvertisingProvide/WhatDoesAdvertisingProvide";
import { StoriesInCards } from "./storiesInCards/storiesInCards";
import { SuccessStories } from "./successStories/successStories";
import { GISmainForm } from "@/components/reusedComponents/public";

export const HomePage = () => {
  return (
    <section>
      <FirstScreen />
      <main>
        <AdvertisingNumbers />
        <CustomInfoBlock data={customBlock_first} />
        <CustomInfoBlock data={customBlock_second} />
        <OnUsersPass />
      </main>
      <WhatDoesAdvertisingProvide />
      <main>
        <StoriesInCards />
        <SuccessStories />
        <GISmainForm />
      </main>
    </section>
  );
};
