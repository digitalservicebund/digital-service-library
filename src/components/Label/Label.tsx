import React from "react";
import classNames from "classnames";

export interface LabelProps extends React.ComponentPropsWithoutRef<"label"> {
  /** label for disabled inputs */
  disabled?: boolean;
}

const Label = (props: LabelProps) => {
  const { disabled, children, className, ...rest } = props;

  const labelClassName = classNames(
    "text-black text-base leading-tight mb-0.5",
    { "text-darkGrey-800": disabled },
    className
  );

  return (
    <label className={labelClassName} {...rest}>
      {children}
    </label>
  );
};

export default Label;
