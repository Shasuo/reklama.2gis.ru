import styles from "./footerLink.module.css";
import Link from "next/link";
export const FooterLink = ({
  text,
  href,
  noBlank,
  mt,
}: {
  text: string;
  href?: string;
  noBlank?: boolean;
  mt?: boolean;
}) => {
  const tw_styles = "text-[#6D6D6D] block";
  if (href) {
    return (
      <Link
        href={href}
        target={noBlank ? "" : "_blank"}
        className={`mobile:leading-5 ${styles.item} ${tw_styles} font-normal text-sm leading-[18px]`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  } else {
    return (
      <div
        className={`${tw_styles} ${mt ? "pt-3" : ""} text-base leading-6 font-medium`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  }
};
