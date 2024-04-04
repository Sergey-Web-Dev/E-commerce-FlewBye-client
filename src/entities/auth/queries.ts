import {
  authControllerSignIn,
  authControllerSignOut,
  authControllerSignUp,
} from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useResetSession } from "../session";

const authKey = ["auth"];

export function useSignInQuery() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: authControllerSignIn,
    onSuccess(data) {
      router.push(ROUTES.ACCOUNT);
      queryClient.setQueryData(authKey, data);
    },
    async onSettled() {
      //@ts-ignore
      await queryClient.invalidateQueries(blockListKey);
    },
  });
}

export function useSignInAdminQuery() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: authControllerSignIn,
    onSuccess(data) {
      router.push(ROUTES.ADMIN);
      queryClient.setQueryData(authKey, data);
    },
    async onSettled() {
      //@ts-ignore
      await queryClient.invalidateQueries(blockListKey);
    },
  });
}

export function useSignUpQuery() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: authControllerSignUp,
    onSuccess(data) {
      router.push(ROUTES.ACCOUNT);
      queryClient.setQueryData(authKey, data);
    },
    async onSettled() {
      //@ts-ignore
      await queryClient.invalidateQueries(blockListKey);
    },
  });
}

export function useSignOutQuery() {
  const router = useRouter();

  return useMutation({
    mutationFn: authControllerSignOut,
    async onSuccess() {
      location.reload();
      useResetSession();
    },
  });
}
