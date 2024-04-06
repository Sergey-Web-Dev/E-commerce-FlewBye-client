import { useAddItemQuery } from "@/entities/items";
import { AddItemDtoType } from "@/shared/api/generated";
import { useForm } from "react-hook-form";

export function useAddItems() {
  const { handleSubmit, register, reset } = useForm<{
    description: string;
    img: string[];
    name: string;
    price: number;
    type: AddItemDtoType;
  }>({
    defaultValues: {
      type: AddItemDtoType.Soap,
    },
  });

  const addItems = useAddItemQuery();
  const errorMsg = addItems.error ? "Something went wrong" : undefined;

  return {
    isLoading: addItems.isPending,
    handleSubmit: handleSubmit((data) => {
      const { img, name, price, description, type } = data;

      addItems.mutate(
        //@ts-ignore
        {
          data: {
            img: Array.isArray(img) ? img : Object.values(img),
            name,
            price: typeof price === "number" ? price : +price,
            description,
            type,
          },
        },
        {
          onSuccess() {
            reset();
          },
        },
      );
      console.log(addItems.error);
    }),
    register,
    errorMsg,
  };
}
