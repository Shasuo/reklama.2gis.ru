import Link from "next/link";

import { useRouter } from "next/router";
import clsx from "clsx";
export const HeaderNav = ({ mobile }: { mobile?: boolean }) => {
  const router = useRouter();
  const currentPage = router.pathname;
  return (
    <nav
      className={`${mobile ? "mt-14 text-menuXl flex flex-col space-y-5" : "mobile:hidden text-base space-x-6"} text-primary font-medium flex `}
    >
      <Link
        href={"/"}
        className={clsx("hover:text-gisGreen", {
          ["text-gisGreen"]: currentPage === "/",
        })}
      >
        Главная
      </Link>
      <Link
        href={"/about"}
        className={clsx("hover:text-gisGreen", {
          ["text-gisGreen"]: currentPage === "/about",
        })}
      >
        Узнать больше
      </Link>
      <a
        href={"https://reklama.2gis.ru/price"}
        className={"hover:text-gisGreen"}
      >
        Цены
      </a>
      <a href={"https://stories.2gis.ru/"} className={"hover:text-gisGreen"}>
        Кейсы
      </a>
      <a
        href={"https://stories.2gis.ru/glossary"}
        className={"hover:text-gisGreen"}
      >
        Рекламные позиции
      </a>
    </nav>
  );
};
