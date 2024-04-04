import {
  itemsControllerAddItem,
  itemsControllerGetItems,
  itemsControllerPatchItem,
  itemsControllerRemoveItem,
  PatchItemDto,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const itemsKey = ["items"] as unknown[];

export function useItemsQuery({ q, qu }: { q?: string; qu?: number }) {
  return useQuery({
    queryKey: itemsKey.concat([{ q, qu }]),
    queryFn: () => itemsControllerGetItems({ q, qu }),
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
}

export function useAddItemQuery() {
  const queryClient = useQueryClient();

  return useMutation({
    //@ts-ignore
    mutationFn: itemsControllerAddItem,
    async onSuccess(data) {
      queryClient.setQueryData(itemsKey, data);
    },
    async onSettled() {
      //@ts-ignore
      await queryClient.invalidateQueries(itemsKey);
    },
  });
}

export function usePatchItemQuery({ id }: { id: number }) {
  const queryClient = useQueryClient();

  return useMutation({
    //@ts-ignore
    mutationFn: () => itemsControllerPatchItem(id),
    onSuccess(data) {
      queryClient.setQueryData(itemsKey, data);
    },
    async onSettled() {
      // @ts-ignore
      await queryClient.invalidateQueries(itemsKey);
    },
  });
}

export function useRemoveItemQuery() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: itemsControllerRemoveItem,
    async onSuccess(data) {
      queryClient.setQueryData(itemsKey, data);
    },
    async onSettled() {
      //@ts-ignore
      await queryClient.invalidateQueries(itemsKey);
    },
  });
}
