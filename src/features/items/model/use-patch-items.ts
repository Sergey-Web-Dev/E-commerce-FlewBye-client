import { usePatchItemQuery } from "@/entities/items";
import { PatchItemDtoType } from "@/shared/api/generated";
import { useId, useState } from "react";
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

  const patchItems = usePatchItemQuery({ id });

  return {
    isLoading: patchItems.isPending,
    handleSubmit: handleSubmit((data) => {
      //@ts-ignore
      patchItems.mutate(data, {
        onSuccess() {
          reset();
        },
      });
    }),
    register,
    setId,
    id,
  };
}
