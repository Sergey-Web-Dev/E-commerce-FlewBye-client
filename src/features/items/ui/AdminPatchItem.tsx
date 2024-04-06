import React, { useEffect, useState } from "react";
import Button from "@/shared/ui/button";
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
import { usePatchItems } from "../model/use-patch-items";
import { AddItemDtoType } from "@/shared/api/generated";
import SelectField from "@/shared/ui/select-field";
import TextField from "@/shared/ui/text-field";
import TextAreaField from "@/shared/ui/text-area-field";
import { toast } from "sonner";
import { Edit } from "./admin-patch-item";

export const AdminPatchItem = ({
  id,
  className,
}: {
  id: number;
  className?: string;
}) => {
  const {
    isLoading,
    handleSubmit,
    register,
    setId,
    isSuccess,
    errorMsgPatchItem,
  } = usePatchItems();

  const [skipCount, setSkipCount] = useState(true);
  const [patchCard, setPatchCard] = useState(true);

  useEffect(() => {
    if (skipCount) setSkipCount(false);
    if (!skipCount) toast("Товар не был добавлен. Ошибка добавления!");
  }, [errorMsgPatchItem]);

  useEffect(() => {
    if (patchCard) setPatchCard(false);
    if (!patchCard) toast("Товар успешно изменен.");
  }, [isSuccess]);

  const typeOptions = [
    {
      label: "Мыло",
      value: AddItemDtoType.Soap,
    },

    {
      label: "Гель",
      value: AddItemDtoType.Gel,
    },

    {
      label: "Набор",
      value: AddItemDtoType.Gift,
    },
  ];
  return (
    <AlertDialog>
      <AlertDialogTrigger
        onClick={() => {
          setId(id);
        }}
      >
        <Button variant="primary">
          <Edit />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Введите новые данные</AlertDialogTitle>
          <AlertDialogDescription>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <TextField
                label="Название продукта"
                inputprops={{
                  type: "text",
                  ...register("name", { required: true }),
                }}
              />

              <TextField
                label="Фото"
                inputprops={{
                  type: "file",
                  multiple: true,
                  ...register("img", { required: true }),
                }}
              />

              <TextAreaField
                label="Описание"
                textareaprops={{
                  rows: 7,
                  ...register("description", { required: true }),
                }}
              />

              <TextField
                label="Цена"
                inputprops={{
                  type: "number",
                  ...register("price", { required: true }),
                }}
              />

              <SelectField
                label="Тип"
                addFormOptions={typeOptions}
                selectprops={{
                  ...register("type", { required: true }),
                }}
              />

              <button disabled={isLoading}>
                <AlertDialogAction
                  onClick={() => {
                    isSuccess
                      ? toast("Товар был успешно изменен!")
                      : toast("Изменение товара не удалось :(");
                  }}
                >
                  Изменить товар
                </AlertDialogAction>
              </button>

              {errorMsgPatchItem && (
                <div className="text-rose-400">{errorMsgPatchItem}</div>
              )}
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
