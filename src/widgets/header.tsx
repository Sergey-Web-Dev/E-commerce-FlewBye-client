import clsx from "clsx";
import React, { ReactNode } from "react";
import Logo from "../shared/ui/logo";
import LinkUI from "@/shared/ui/link";
import { ROUTES } from "@/shared/constants/routes";

const Header = ({
  className,
  navbar,
  cartBlock,
}: {
  className?: string;
  navbar?: ReactNode;
  cartBlock?: ReactNode;
}) => {
  return (
    <header
      className={clsx(
        "px-4 py-5 mb-4 border-b border-b-slate-300 flex justify-between items-center bg-white",
        className,
      )}
    >
      <LinkUI href={ROUTES.HOME}>
        <Logo />
      </LinkUI>
      {navbar}
      {cartBlock}
    </header>
  );
};

export default Header;
