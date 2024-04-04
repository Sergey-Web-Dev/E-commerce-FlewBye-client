import React from "react";
import TextField from "@/shared/ui/text-field";
import Button from "@/shared/ui/button";
import LinkUI from "@/shared/ui/link";
import { ROUTES } from "@/shared/constants/routes";
import { UseSignUpForm } from "../model/use-sign-up-form";

export const SignUpFormPage = () => {
  const { isLoading, register, errorMsg, handleSubmit } = UseSignUpForm();

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
        Зарегистрироваться
      </Button>

      <LinkUI className="text-center" href={ROUTES.SIGNIN}>
        Войти
      </LinkUI>

      {errorMsg && <div className="text-rose-400">{errorMsg}</div>}
    </form>
  );
};
