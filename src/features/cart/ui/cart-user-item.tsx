import React, { FC } from "react";
import { GetItemDto } from "@/shared/api/generated";
import PatchCartUserItem from "./patch-cart-user-item";
import CartRemoveItem from "./cart-remove-item";

export type cartUserItem = {
  id: number;
  img: string[];
  name: string;
  price: number;
  item: GetItemDto[];
  isFinished: boolean;
};

const CartUserItem: FC<cartUserItem> = ({ id, item, isFinished }) => {
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex flex-col justify-between items-center gap-2">
        <div>
          <img src={item[0].img[0]} alt="product.png" />
        </div>
        <div>{item[0].name}</div>
        <div>{item[0].price}</div>
      </div>
      <div>
        <PatchCartUserItem isFinished={isFinished} />
      </div>
      <div>
        <CartRemoveItem id={id} />
      </div>
    </div>
  );
};

export default CartUserItem;
