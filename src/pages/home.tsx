import { BlockListItems } from "@/features/items/ui/block-list-items";
import CartBlock from "@/widgets/cart-block";
import Header from "@/widgets/header";
import Navbar from "@/widgets/navbar";
import React from "react";

export default function Home() {
  return (
    <>
      <Header cartBlock={<CartBlock />} navbar={<Navbar />} />
      <main>
        <BlockListItems />
      </main>
    </>
  );
}
