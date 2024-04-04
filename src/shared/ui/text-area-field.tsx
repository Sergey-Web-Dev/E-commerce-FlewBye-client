import React, { TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import { FC, InputHTMLAttributes, PropsWithRef, useId } from "react";

export type TextAreaFieldProps = {
  classname?: string;
  label?: string;
  error?: string;
  textareaprops?: PropsWithRef<TextareaHTMLAttributes<HTMLTextAreaElement>>;
};

const TextAreaField: FC<TextAreaFieldProps> = ({
  classname,
  label,
  error,
  textareaprops,
}) => {
  const id = useId();

  return (
    <div className={clsx(classname, "flex flex-col gap-1")}>
      {label && (
        <label className="block" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        {...textareaprops}
        id={id}
        className={clsx(
          textareaprops?.className,
          "border rounded border-slate-300 focus:border-teal-600 px-2  outline-none",
        )}
      />
      {error && <div className="text-sm text-red-400">{error}</div>}
    </div>
  );
};

export default TextAreaField;
