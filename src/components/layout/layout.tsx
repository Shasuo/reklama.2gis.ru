import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Header, Footer } from "../parentComponents/public";

export const Layout = ({
  children,
  ...props
}: MainLayoutProps): JSX.Element => {
  return (
    <div className={"font-suisse"} {...props}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export type MainLayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
