import { SignInFormPage } from "@/features/auth/ui/sign-in-form-page";
import UiFormPageLayout from "@/shared/ui/layouts/ui-form-page-layout";
import Header from "@/widgets/header";
import React from "react";

const SignIn = () => {
  return (
    <UiFormPageLayout
      header={<Header />}
      title={"Вход"}
      form={<SignInFormPage />}
    />
  );
};

export default SignIn;
