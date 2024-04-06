import React from "react";
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
import { useRemoveItemQuery } from "@/entities/items";

const Trash = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
    />
  </svg>
);

const AdminRemoveItem = ({
  id,
  className,
}: {
  id: number;
  className?: string;
}) => {
  const removeAdminItems = useRemoveItemQuery();
  const handleRemove = () => removeAdminItems.mutate(id);

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="secondary">
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Вы точно хотите удалить товар ?</AlertDialogTitle>
          <AlertDialogDescription>
            Это действие невозможно будет отменить в дальнейшем. Товар будет
            удален из вашего списка.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Отмена</AlertDialogCancel>
          <button disabled={removeAdminItems.isPending} onClick={handleRemove}>
            <AlertDialogAction>Удалить</AlertDialogAction>
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AdminRemoveItem;
