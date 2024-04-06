import { usePatchItemQuery } from "@/entities/items";
import { PatchItemDtoType } from "@/shared/api/generated";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function usePatchItems() {
  const { handleSubmit, register, reset } = useForm<{
    description: string;
    img: string[];
    name: string;
    price: number;
    type: PatchItemDtoType;
  }>({
    defaultValues: {
      type: PatchItemDtoType.Soap,
    },
  });
  const [id, setId] = useState(0);

  const patchItems = usePatchItemQuery();
  const errorMsgPatchItem = patchItems.error
    ? "Something went wrong"
    : undefined;

  return {
    isLoading: patchItems.isPending,
    handleSubmit: handleSubmit((data) => {
      const { img, name, price, description, type } = data;

      patchItems.mutate(
        //@ts-ignore
        {
          id: id,
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
      console.log(patchItems.error);
      console.log(data.img);
    }),
    register,
    setId,
    id,
    errorMsgPatchItem,
    isSuccess: patchItems.isSuccess,
  };
}
