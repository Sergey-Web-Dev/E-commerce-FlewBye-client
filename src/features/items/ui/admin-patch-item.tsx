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
import clsx from "clsx";
import { usePatchItems } from "../model/use-patch-items";
import { AddItemDtoType } from "@/shared/api/generated";
import SelectField from "@/shared/ui/select-field";
import TextField from "@/shared/ui/text-field";
import TextAreaField from "@/shared/ui/text-area-field";
import { toast } from "sonner";

const Edit = ({ className }: { className?: string }) => (
  <svg
    className={clsx(className, "w-6 h-6 text-white dark:text-white")}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fill-rule="evenodd"
      d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
      clip-rule="evenodd"
    />
    <path
      fill-rule="evenodd"
      d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
      clip-rule="evenodd"
    />
  </svg>
);

const AdminPatchItem = ({
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
    if (!skipCount) toast("Товар не был изменен. Ошибка изменения!");
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
                <AlertDialogAction>Изменить товар</AlertDialogAction>
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

export default AdminPatchItem;
