import { useAllCartItemsQuery } from "@/entities/cart";

export function useAllCartItems() {
  const cartAllItems = useAllCartItemsQuery();
  const items = cartAllItems.data?.item ?? [];

  return {
    isLoading: cartAllItems.isLoading,
    items,
  };
}
