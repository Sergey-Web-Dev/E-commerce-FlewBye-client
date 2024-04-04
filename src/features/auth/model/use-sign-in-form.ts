import { useSignInQuery } from "@/entities/auth";
import { useSignInAdminQuery } from "@/entities/auth/queries";
import { useForm } from "react-hook-form";

export const UseSignInForm = () => {
  const signIn = useSignInQuery();
  const signInAdmin = useSignInAdminQuery();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const errorMsg = signIn.error ? "Something went wrong" : undefined;

  return {
    register,
    errorMsg,
    handleSubmit: handleSubmit((data) =>
      data.email === "kate@mail.ru"
        ? signInAdmin.mutate(data)
        : signIn.mutate(data),
    ),
    isLoading: signIn.isPending,
  };
};
