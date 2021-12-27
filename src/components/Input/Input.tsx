import React from "react";
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

export interface InputProps {
  /**
  The id of the Input - used for accessibility and should match the "for" property of the label
  */
  id: string;
  /**
  The name of the Input 
  */
  name: string;
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

const Input = (props: InputProps) => {
  return (
    <input
      id={props.id}
      name={props.name}
      className="inline-flex items-center justify-start px-4 py-3 bg-white border-2 border-gray-400 w-full text-black hover:border-blue-900 focus:outline focus:outline-offset-0 focus:outline-none focus:outline-yellow-800 disabled:bg-gray-200 disabled:hover:border-gray-400"
      type={props.type}
      placeholder={props.placeholder || ""}
      disabled={props.disabled || false}
      required={props.required || false}
      onBlur={props.onBlur}
      minLength={props.minlength || 0}
      maxLength={props.maxlength || 9999}
      min={props.min || "none"}
      max={props.max || "none"}
    />
  );
};

export default Input;
