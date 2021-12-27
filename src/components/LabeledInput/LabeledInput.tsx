import React from "react";
import Input from "../Input";
import Label from "../Label";
import "../../index.css";

enum InputType {
  Text = "text",
  Number = "number",
  Email = "email",
  Password = "password",
  Search = "search",
  Tel = "tel",
  Url = "url",
  Date = "date",
  Month = "month",
  Week = "week",
  Time = "time",
  Range = "range",
  Reset = "reset",
}

export interface LabeledInputProps {
  /**
  The id of the Input - used for accessibility and should match the "for" property of the label
  */
  id: string;
  /**
  The name of the Input 
  */
  name: string;
  /**
  The label for the Input 
  */
  label: string;
  /**
  The type of the Input
  */
  type: InputType | string;
  /**
  placeholder for the Input 
  */
  placeholder?: string;
  /**
  a change event listener
  */
  onBlur?: () => void;
  /**
   * State of the Input
   */
  disabled?: boolean;
  /**
   * state whther the Input is required
   */
  required?: boolean;
  /**
   * Minimum length (number of characters) of value
   * e.g. for password, search, tel, text, url
   */
  minlength?: number;
  /**
   * maximum length (number of characters) of value
   * e.g. for password, search, tel, text, url
   */
  maxlength?: number;
  /**
   * minimum value for numeric types
   */
  min?: number;
  /**
   * maximum value for numeric types
   */
  max?: number;
}

const LabeledInput = (props: LabeledInputProps) => {
  return (
    <>
      <Label for={props.id}>{props.label}</Label>
      <Input {...props} />
    </>
  );
};

export default LabeledInput;
