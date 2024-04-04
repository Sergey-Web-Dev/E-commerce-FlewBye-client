import React from "react";
import { usePatchCartItems } from "../model/use-patch-cart-items";
import Button from "@/shared/ui/button";

const PatchCartUserItem = ({ isFinished }: { isFinished: boolean }) => {
  const { isLoading, isReady } = usePatchCartItems();
  return (
    <Button
      onClick={() => {}}
      variant={isFinished ? "primary" : "secondary"}
      disabled={isLoading}
    >
      {isFinished ? "Заказ готов" : "Заказ не готов"}
    </Button>
  );
};

export default PatchCartUserItem;
