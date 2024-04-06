import AddItemFormPage from "@/features/items/ui/add-item-form-page";
import UiFormPageLayout from "@/shared/ui/layouts/ui-form-page-layout";
import CartBlock from "@/widgets/cart-block";
import Header from "@/widgets/header";
import NavbarAdmin from "@/widgets/navbar-admin";
import React from "react";

const AdminPage = () => {
  return (
    <>
      <Header cartBlock={<CartBlock />} navbar={<NavbarAdmin />} />
      <main>
        <UiFormPageLayout
          title="Добавление товара"
          form={<AddItemFormPage />}
        />
      </main>
    </>
  );
};

export default AdminPage;
