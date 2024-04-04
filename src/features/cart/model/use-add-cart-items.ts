import { useAddCartItemQuery } from "@/entities/cart";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function useAddCartItems() {
  const [id, setId] = useState(0);

  const { reset, register, handleSubmit } = useForm<{
    count: number;
    mail: string;
    tel: string;
  }>({
    defaultValues: {
      count: 1,
      mail: "example@gmail.com",
      tel: "+375295463225",
    },
  });

  const addCartItems = useAddCartItemQuery();

  const errorMsg = addCartItems.error ? "Something went wrong" : undefined;

  return {
    id,
    setId,
    register,
    handleSubmit: handleSubmit((data) => {
      const { count, tel, mail } = data;
      addCartItems.mutate(
        //@ts-ignore
        {
          data: {
            count: typeof count === "number" ? count : +count,
            tel,
            mail,
          },
          id: id,
        },
        {
          onSuccess() {
            reset();
          },
        },
      );
    }),
    isLoading: addCartItems.isPending,
    errorMsg,
  };
}
