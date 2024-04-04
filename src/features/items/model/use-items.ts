import { useItemsQuery } from "@/entities/items";
import { GetItemDto } from "@/shared/api/generated";
import { useState } from "react";

export function useItems() {
  const [q, setQ] = useState("");
  const [query, setQuery] = useState();

  const itemsQuery = useItemsQuery({
    q: q,
    qu: query,
  });

  //@ts-ignore
  const items = (itemsQuery.data as Array<GetItemDto>) ?? [];

  return {
    items,
    isLoading: itemsQuery.isLoading,
    q,
    setQ,
    query,
    setQuery,
  };
}
