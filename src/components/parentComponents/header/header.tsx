import Image from "next/image";
import { HeaderLogo } from "./headerLogo";
import { HeaderNav } from "./headerNav";
import { useState } from "react";
import clsx from "clsx";
import { useEffect } from "react";
import { useRouter } from "next/router";
export const Header = () => {
  const [mobileMenuOpenState, setMobileMenuOpenState] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => setMobileMenuOpenState(false);

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <header
      className={
        "mobile:z-30 mobile:py-3 mobile:top-0 mobile:left-0 mobile:w-full mobile:fixed pt-10 bg-[#f4f4f4]"
      }
    >
      <section
        className={
          "dangerMobile:max-w-10-px-borders mobile:max-w-mobileWidth max-w-desktopWidth w-full mx-auto flex items-center justify-between box-border"
        }
      >
        <HeaderLogo />
        <HeaderNav />
        <Image
          src={"/images/Burger.svg"}
          width={36}
          height={36}
          alt={"Открыть меню"}
          className={"mobile:block hidden hover:cursor-pointer"}
          onClick={() => setMobileMenuOpenState(true)}
        />
      </section>
      <section
        className={clsx("fixed w-full h-full bg-white top-0 left-0", {
          hidden: !mobileMenuOpenState,
          block: mobileMenuOpenState,
        })}
      >
        <div
          className={
            "dangerMobile:max-w-10-px-borders max-w-mobileWidth w-full mx-auto"
          }
        >
          <div className={"flex items-center justify-between py-3"}>
            <HeaderLogo />
            <Image
              src={"/images/icon__Close.svg"}
              width={36}
              height={36}
              alt={"Закрыть меню"}
              className={"hover:cursor-pointer"}
              onClick={() => setMobileMenuOpenState(false)}
            />
          </div>
          <div>
            <HeaderNav mobile />
          </div>
        </div>
      </section>
    </header>
  );
};
