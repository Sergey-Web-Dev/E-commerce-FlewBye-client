import { usePatchCartItemQuery } from "@/entities/cart";
import { useState } from "react";

export function usePatchCartItems() {
  const [id, setId] = useState(0);
  const patchCartItems = usePatchCartItemQuery({ id });

  const toggleFinished = () => {
    //@ts-ignore
    patchCartItems.mutate({ isFinished: !patchCartItems.data?.isFinished });
  };

  return {
    id,
    setId,
    isLoading: patchCartItems.isPending,
    toggleFinished,
    isFinished: patchCartItems.data?.isFinished ?? false,
    isReady: patchCartItems.isSuccess,
  };
}
