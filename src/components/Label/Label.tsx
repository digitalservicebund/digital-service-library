import React from "react";
import "../../index.css";

export interface LabelProps {
  /**
  the intended id of the input
  */
  for: string;
  /**
  The label to be shown
  */
  children: string;
}

const Label = (props: LabelProps) => {
  return (
    <label htmlFor={props.for} className="text-lg font-bold">
      {props.children}
    </label>
  );
};

export default Label;
