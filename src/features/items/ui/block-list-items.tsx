import React, { ChangeEvent, useState } from "react";
import TextField from "@/shared/ui/text-field";
import Spinner from "@/shared/ui/spinner";
import Button from "@/shared/ui/button";
import { useItems } from "../model/use-items";
import BlockItems from "./block-items";
import { SignOutButton } from "@/features/auth/ui/sign-out-btn";

export const BlockListItems = ({ className }: { className?: string }) => {
  const { isLoading, items, q, setQ, query, setQuery } = useItems();

  const isLoader = isLoading;
  const isEmptyText = !isLoading && items.length === 0;
  const isItems = items.length > 0;

  return (
    <div className={className}>
      <div className="flex justify-between items-center p-6 gap-3">
        <div className="w-full">
          <TextField
            classname="mb-6 "
            label="Search..."
            inputprops={{
              value: q,
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                setQ(e.target.value),
            }}
          />
        </div>
        <div className="flex justify-between items-center gap-3">
          <Button
            variant="secondary"
            onClick={() => {
              //@ts-ignore
              setQuery(50);
            }}
          >
            Меньше 50
          </Button>

          <Button
            variant="primary"
            onClick={() => {
              setQuery(undefined);
            }}
          >
            Сбросить
          </Button>
        </div>
      </div>

      <hr />

      <div className="rounded-xl bg-slate-100/50 px-5 py-4 flex justify-center items-center gap-20 flex-wrap">
        {isLoader && <Spinner className="text-teal-600 w-8 h-8 mx-auto" />}
        {isEmptyText && (
          <div className="text-sm py-1 text-slate-500 text-center">
            Empty List :(
          </div>
        )}

        {isItems && items.map((item) => <BlockItems key={item.id} {...item} />)}
      </div>
    </div>
  );
};
