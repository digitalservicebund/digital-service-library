import React from "react";
import classNames from "classnames";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className={classNames(
        "inline-flex items-center justify-start px-4 py-3 bg-white border-2 border-gray-400 w-full text-black hover:border-blue-900 focus:outline focus:outline-offset-0 focus:outline-none focus:outline-yellow-800 disabled:bg-gray-200 disabled:hover:border-gray-400",
        props.className
      )}
    />
  );
};

export default Input;
