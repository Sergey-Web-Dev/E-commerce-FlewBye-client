import CartUserListItems from "@/features/cart/ui/cart-user-list-items";
import CartBlock from "@/widgets/cart-block";
import Header from "@/widgets/header";
import Navbar from "@/widgets/navbar";
import React from "react";

export default function AccountPage() {
  return (
    <>
      <Header cartBlock={<CartBlock />} navbar={<Navbar />} />
      <main>
        <div>
          <CartUserListItems />
        </div>
      </main>
    </>
  );
}
