import { useCartItemsQuery } from "@/entities/cart/queries";
import { CartItemDto } from "@/shared/api/generated";
import { useState } from "react";

export function useCartItems() {
  const [q, setQ] = useState("");
  const [query, setQuery] = useState();

  const userCartItems = useCartItemsQuery({
    q: q,
    qu: query,
  });
  //@ts-ignore
  const userItems = (userCartItems.data as Array<CartItemDto>) ?? [];

  return {
    isLoading: userCartItems.isLoading,
    userItems,
    q,
    setQ,
    query,
    setQuery,
  };
}
