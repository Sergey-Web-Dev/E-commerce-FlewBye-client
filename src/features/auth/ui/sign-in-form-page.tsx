import React from "react";
import { UseSignInForm } from "../model/use-sign-in-form";
import TextField from "@/shared/ui/text-field";
import Button from "@/shared/ui/button";
import LinkUI from "@/shared/ui/link";
import { ROUTES } from "@/shared/constants/routes";

export const SignInFormPage = () => {
  const { isLoading, register, errorMsg, handleSubmit } = UseSignInForm();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <TextField
        label="Email"
        inputprops={{
          type: "email",
          ...register("email", { required: true }),
        }}
      />

      <TextField
        label="Password"
        inputprops={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />

      <Button disabled={isLoading} variant="primary">
        Вход
      </Button>

      <LinkUI className="text-center" href={ROUTES.SIGNUP}>
        Зарегистрироваться
      </LinkUI>

      {errorMsg && <div className="text-rose-400">{errorMsg}</div>}
    </form>
  );
};
