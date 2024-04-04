import { SignUpFormPage } from "@/features/auth/ui/sign-up-form-page";
import UiFormPageLayout from "@/shared/ui/layouts/ui-form-page-layout";
import Header from "@/widgets/header";
import React from "react";

const SignUp = () => {
  return (
    <UiFormPageLayout
      header={<Header />}
      title={"Регистрация"}
      form={<SignUpFormPage />}
    />
  );
};

export default SignUp;
