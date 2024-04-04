import React, { ChangeEvent } from "react";
import { useCartItems } from "../model/use-cart-items";
import TextField from "@/shared/ui/text-field";
import Spinner from "@/shared/ui/spinner";
import CartUserItem from "./cart-user-item";

const CartUserListItems = () => {
  const { isLoading, userItems, q, setQ } = useCartItems();

  const isLoader = isLoading;
  const isEmptyText = !isLoading && userItems.length === 0;
  const isItems = userItems.length > 0;

  return (
    <div>
      <TextField
        classname="mb-6 "
        label="Search..."
        inputprops={{
          value: q,
          onChange: (e: ChangeEvent<HTMLInputElement>) => setQ(e.target.value),
        }}
      />

      <hr />

      <div className="rounded-xl bg-slate-100/50 px-5 py-4  ">
        {isLoader && <Spinner className="text-teal-600 w-8 h-8 mx-auto" />}
        {isEmptyText && (
          <div className="text-sm py-1 text-slate-500 text-center">
            Empty List :(
          </div>
        )}

        {isItems &&
          //@ts-ignore
          userItems.map((item) => <CartUserItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default CartUserListItems;
