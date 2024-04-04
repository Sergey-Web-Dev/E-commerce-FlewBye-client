import clsx from "clsx";
import { FC, InputHTMLAttributes, PropsWithRef, useId } from "react";

export type TextFieldProps = {
  classname?: string;
  label?: string;
  error?: string;
  inputprops?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
};

const TextField: FC<TextFieldProps> = ({
  classname,
  label,
  error,
  inputprops,
}) => {
  const id = useId();

  return (
    <div className={clsx(classname, "flex flex-col gap-1")}>
      {label && (
        <label className="block" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...inputprops}
        id={id}
        className={clsx(
          inputprops?.className,
          "border rounded border-slate-300 focus:border-teal-600 px-2 h-10 outline-none",
        )}
      />
      {error && <div className="text-sm text-red-400">{error}</div>}
    </div>
  );
};

export default TextField;
