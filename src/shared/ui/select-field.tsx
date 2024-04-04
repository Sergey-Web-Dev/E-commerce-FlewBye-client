import clsx from "clsx";
import React, { FC, PropsWithRef, SelectHTMLAttributes, useId } from "react";

export type SelectOptions = {
  value: number;
  label: string;
};

export type SelectFormOptions = {
  value: string;
  label: string;
};

export type SelectFieldProps = {
  classname?: string;
  label?: string;
  error?: string;
  selectprops?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: SelectOptions[];
  addFormOptions?: SelectFormOptions[];
};

const SelectField: FC<SelectFieldProps> = ({
  classname,
  label,
  error,
  selectprops,
  options,
  addFormOptions,
}) => {
  const id = useId();

  return (
    <div className={clsx(classname, "flex flex-col gap-1")}>
      {label && (
        <label className="block" htmlFor={id}>
          {label}
        </label>
      )}

      <select
        id={id}
        {...selectprops}
        className={clsx(
          selectprops?.className,
          "border rounded border-slate-300 focus:border-teal-600 px-2 h-10 outline-none",
        )}
      >
        {options?.map(({ value, label }, idx) => (
          <option value={value as number} key={idx}>
            {label}
          </option>
        ))}

        {addFormOptions?.map(({ value, label }, idx) => (
          <option value={value} key={idx}>
            {label}
          </option>
        ))}
      </select>

      {error && <div className="text-sm text-red-400">{error}</div>}
    </div>
  );
};

export default SelectField;
