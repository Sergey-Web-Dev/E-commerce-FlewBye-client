import { useRemoveCartItemQuery } from "@/entities/cart";
import { useState } from "react";

export function useRemoveCartItems() {
  // const [id, setId] = useState(0);
  const removeCartItems = useRemoveCartItemQuery();

  return {
    isLoading: removeCartItems.isPending,
    removeCartItems: removeCartItems.mutate,
    // id,
    // setId,
  };
}
