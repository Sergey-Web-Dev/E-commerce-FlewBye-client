import { useRemoveItemQuery } from "@/entities/items";

export function useRemoveItems(id: number) {
  const removeItems = useRemoveItemQuery();

  return {
    isLoading: removeItems.isPending,
    removeItems: removeItems.mutate(id),
  };
}
