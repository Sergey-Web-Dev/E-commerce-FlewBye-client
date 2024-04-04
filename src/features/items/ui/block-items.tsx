import React, { FC } from "react";
import { AddItemDtoType } from "@/shared/api/generated";
import clsx from "clsx";
import LinkUI from "@/shared/ui/link";
import UiBtnAddCartItemLayout from "@/components/ui/layouts/ui-btn-add-cart-item-layout";
import { useSessionQuery } from "@/entities/session";
import Button from "@/shared/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { ROUTES } from "@/shared/constants/routes";

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

const Edit = ({ className }: { className?: string }) => (
  <svg
    className={clsx(className, "w-6 h-6 text-gray-800 dark:text-white")}
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

export type BlockItems = {
  id: number;
  description: string;
  img: string[];
  name: string;
  price: number;
  type: AddItemDtoType;
};

const BlockItems: FC<BlockItems> = ({
  id,
  description,
  img,
  name,
  price,
  type,
}) => {
  const sessionQuery = useSessionQuery();
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between items-center w-1/4">
      <div>
        <img
          src={img[0]}
          alt="photo_product.png"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div>
        <div>{name}</div>
        <div>{description}</div>
        <div>{price}</div>
        <div>{type}</div>
        {sessionQuery.data && (
          <Button variant="primary">
            <UiBtnAddCartItemLayout id={id} />
          </Button>
        )}
        {!sessionQuery.data && (
          <Button
            variant="primary"
            onClick={() => {
              toast("Вы не зарегистрированы!", {
                unstyled: true,
                classNames: {
                  title: "bg-red-600 p-5 text-white",
                },
              }),
                setTimeout(() => {
                  router.push(ROUTES.SIGNIN);
                }, 1000);
            }}
          >
            Заказать
          </Button>
        )}
      </div>
    </div>
  );
};

export default BlockItems;
