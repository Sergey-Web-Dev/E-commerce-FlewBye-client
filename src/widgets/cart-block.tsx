import { useSessionQuery } from "@/entities/session";
import { SignOutButton } from "@/features/auth/ui/sign-out-btn";
import { ROUTES } from "@/shared/constants/routes";
import LinkUI from "@/shared/ui/link";
import React from "react";

const CartBlock = () => {
  const sessionQuery = useSessionQuery();

  return (
    <div>
      <ul className="flex justify-between items-center">
        <li>
          {sessionQuery.data && <SignOutButton />}
          {!sessionQuery.data && (
            <LinkUI href={ROUTES.SIGNIN} className="text-red-600">
              Sign In
            </LinkUI>
          )}
        </li>
        <li>
          <LinkUI href={ROUTES.ACCOUNT} className="text-red-600">
            Account
          </LinkUI>
        </li>
      </ul>
    </div>
  );
};

export default CartBlock;
