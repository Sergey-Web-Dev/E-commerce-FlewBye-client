import { ROUTES } from "@/shared/constants/routes";
import LinkUI from "@/shared/ui/link";
import React, { FC } from "react";

export type Navbar = {
  className?: string;
};

const NavbarAdmin: FC<Navbar> = ({ className }) => {
  return (
    <div className={className}>
      <nav>
        <ul className="flex justify-between items-center gap-8">
          <li>
            <LinkUI href={ROUTES.ITEMS} className="text-red-600 text-xl">
              ITEMS
            </LinkUI>
          </li>
          <li>
            <LinkUI href={ROUTES.ORDERS} className="text-red-600 text-xl">
              ORDERS
            </LinkUI>
          </li>
          <li>
            <LinkUI href={ROUTES.ADMIN} className="text-red-600 text-xl">
              CONSTRUCTOR
            </LinkUI>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarAdmin;
