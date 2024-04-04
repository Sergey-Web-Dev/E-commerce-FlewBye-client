import React from "react";
import TextField from "@/shared/ui/text-field";
import SelectField from "@/shared/ui/select-field";
import { AddItemDtoType } from "@/shared/api/generated";
import Button from "@/shared/ui/button";
import TextAreaField from "@/shared/ui/text-area-field";
import { useAddItems } from "../model/use-add-items";

const AddItemFormPage = () => {
  const { isLoading, handleSubmit, register, errorMsg } = useAddItems();

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

      {/* <TextField
        label="Фото"
        inputprops={{
          type: "text",
          ...register("img", { required: true }),
        }}
      /> */}

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

      <Button disabled={isLoading} variant="primary">
        Добавить товар
      </Button>

      {errorMsg && <div className="text-rose-400">{errorMsg}</div>}
    </form>
  );
};

export default AddItemFormPage;
