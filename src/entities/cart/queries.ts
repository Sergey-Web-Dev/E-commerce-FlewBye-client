import {
  AddCartItemDto,
  cartControllerAddCartItem,
  cartControllerGetAllCartItems,
  cartControllerGetCartItem,
  cartControllerPatchCartItem,
  cartControllerRemoveCartItem,
  PatchCartItemDto,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const cartItemsKey = ["cartItems"] as unknown[];

export function useAllCartItemsQuery() {
  return useQuery({
    queryKey: cartItemsKey,
    queryFn: cartControllerGetAllCartItems,
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
}

export function useCartItemsQuery({ q, qu }: { q?: string; qu?: number }) {
  return useQuery({
    queryKey: cartItemsKey.concat([{ q, qu }]),
    queryFn: () => cartControllerGetCartItem({ q, qu }),
    retry: 0,
    staleTime: 5 * 60 * 1000,
  });
}

export function useAddCartItemQuery() {
  const queryClient = useQueryClient();

  return useMutation({
    //@ts-ignore
    mutationFn: ({ id, data }) => cartControllerAddCartItem(id, data),
    async onSuccess(data) {
      queryClient.setQueryData(cartItemsKey, data);
    },
    async onSettled() {
      //@ts-ignore
      await queryClient.invalidateQueries(cartItemsKey);
    },
  });
}

export function usePatchCartItemQuery({ id }: { id: number }) {
  const queryClient = useQueryClient();

  return useMutation({
    //@ts-ignore
    mutationFn: () => cartControllerPatchCartItem(id),
    async onSuccess(data) {
      queryClient.setQueryData(cartItemsKey, data);
    },
    async onSettled() {
      //@ts-ignore
      await queryClient.invalidateQueries(cartItemsKey);
    },
  });
}

export function useRemoveCartItemQuery() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cartControllerRemoveCartItem,
    async onSuccess(data) {
      queryClient.setQueryData(cartItemsKey, data);
    },
    async onSettled() {
      //@ts-ignore
      await queryClient.invalidateQueries(cartItemsKey);
    },
  });
}
