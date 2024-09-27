import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/images/Logo.svg"}
        width={208}
        height={78}
        alt={"2ГИС Геореклама логотип"}
        className={"mobile:w-[107px] mobile:h-auto"}
      />
    </Link>
  );
};
