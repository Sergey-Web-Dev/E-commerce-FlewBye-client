import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAddCartItems } from "@/features/cart/model/use-add-cart-items";
import TextField from "@/shared/ui/text-field";
import SelectField from "@/shared/ui/select-field";
import { toast } from "sonner";

const UiBtnAddCartItemLayout = ({ id }: { id: number }) => {
  const { setId, register, handleSubmit, isLoading, errorMsg } =
    useAddCartItems();

  const [skipCount, setSkipCount] = useState(true);

  useEffect(() => {
    if (skipCount) setSkipCount(false);
    if (!skipCount) toast("Товар не был добавлен. Ошибка добавления!");
  }, [errorMsg]);

  const typeOptions = [
    {
      label: 1,
      value: 1,
    },

    {
      label: 2,
      value: 2,
    },
  ];

  return (
    <AlertDialog>
      <AlertDialogTrigger
        onClick={() => {
          setId(id);
        }}
      >
        Заказать
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Введите данные для заказа</AlertDialogTitle>
          <AlertDialogDescription>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <TextField
                label="Email"
                inputprops={{
                  type: "email",
                  ...register("mail", { required: true }),
                }}
              />
              <TextField
                label="Телефон"
                inputprops={{
                  type: "tel",
                  ...register("tel", { required: true }),
                }}
              />

              <SelectField
                label="Количество"
                selectprops={{
                  ...register("count"),
                }}
                //@ts-ignore
                options={typeOptions}
              />

              <button
                onClick={() => {
                  toast("Товар был успешно добавлен!");
                }}
                disabled={isLoading}
              >
                <AlertDialogAction>Заказать</AlertDialogAction>
              </button>

              {errorMsg && <div className="text-rose-400">{errorMsg}</div>}
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UiBtnAddCartItemLayout;
