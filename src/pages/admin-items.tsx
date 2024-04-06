import { BlockListAdminItems } from "@/features/items/ui/block-list-admin-items";
import CartBlock from "@/widgets/cart-block";
import Header from "@/widgets/header";
import NavbarAdmin from "@/widgets/navbar-admin";
import React from "react";

const AdminItems = () => {
  return (
    <>
      <Header cartBlock={<CartBlock />} navbar={<NavbarAdmin />} />
      <main>
        <BlockListAdminItems />
      </main>
    </>
  );
};

export default AdminItems;
