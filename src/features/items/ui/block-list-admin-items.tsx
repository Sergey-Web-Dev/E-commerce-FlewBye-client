import React, { ChangeEvent } from "react";
import TextField from "@/shared/ui/text-field";
import Spinner from "@/shared/ui/spinner";
import { useItems } from "../model/use-items";
import BlockAdminItems from "./block-admin-items";

export const BlockListAdminItems = ({ className }: { className?: string }) => {
  const { isLoading, items, q, setQ } = useItems();

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
      </div>

      <hr />

      <div className="rounded-xl bg-slate-100/50 px-5 py-4 flex justify-center items-center gap-20 flex-wrap">
        {isLoader && <Spinner className="text-teal-600 w-8 h-8 mx-auto" />}
        {isEmptyText && (
          <div className="text-sm py-1 text-slate-500 text-center">
            Empty List :(
          </div>
        )}

        {isItems &&
          items.map((item) => <BlockAdminItems key={item.id} {...item} />)}
      </div>
    </div>
  );
};
