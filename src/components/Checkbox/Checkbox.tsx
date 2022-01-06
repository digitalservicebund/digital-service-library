import React from "react";
import classNames from "classnames";
import CloseIcon from "../Icons/Close";

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<"input">, "type"> {
  /** indicate error state */
  error?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  const { className, children, error, ...rest } = props;

  const commonBoxClassName =
    "pointer-events-none absolute top-0 left-0 w-8 h-8 border-2";

  const boxClassName = classNames(
    commonBoxClassName,
    error ? "border-red-500" : "border-black",
    "peer-focus:outline peer-focus:outline-4 peer-focus:outline-darkGreen",
    "group-hover:border-blue-500"
  );

  const iconContainerClassName = classNames(
    commonBoxClassName,
    { "color-red-500": error },
    "border-transparent hidden peer-checked:flex",
    "flex items-center justify-center"
  );

  return (
    <label
      htmlFor={props.id}
      className={classNames(
        "group block relative bg-gray-100 pl-10 pt-1 min-h-[2rem] select-none",
        className
      )}
    >
      <input type="checkbox" {...rest} className="peer sr-only" />
      <div className={boxClassName} />
      <div className={iconContainerClassName}>
        <CloseIcon className="w-6" />
      </div>
      {children}
    </label>
  );
};

export default Checkbox;
