import { useSignUpQuery } from "@/entities/auth";
import { useForm } from "react-hook-form";

export const UseSignUpForm = () => {
  const signUp = useSignUpQuery();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const errorMsg = signUp.error ? "Something went wrong" : undefined;

  return {
    register,
    errorMsg,
    handleSubmit: handleSubmit((data) => signUp.mutate(data)),
    isLoading: signUp.isPending,
  };
};
