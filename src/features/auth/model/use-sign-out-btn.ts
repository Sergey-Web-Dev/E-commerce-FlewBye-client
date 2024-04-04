import { useSignOutQuery } from "@/entities/auth";

export const UseSignOut = () => {
  const signOut = useSignOutQuery();

  return {
    signOut: signOut.mutate,
    isLoading: signOut.isPending,
  };
};
