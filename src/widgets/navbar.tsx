import { ROUTES } from "@/shared/constants/routes";
import LinkUI from "@/shared/ui/link";
import React, { FC } from "react";

export type Navbar = {
  className?: string;
};

const Navbar: FC<Navbar> = ({ className }) => {
  return (
    <div className={className}>
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            <LinkUI href={ROUTES.ACCOUNT} className="text-red-600">
              Account
            </LinkUI>
          </li>
          <li>
            <LinkUI href={ROUTES.SOAP} className="text-red-600">
              Soap
            </LinkUI>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
