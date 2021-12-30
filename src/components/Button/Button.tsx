import React from "react";
import "../../index.css";

export interface ButtonProps {
  /**
  The display content of the button
  */
  label: string;
  /**
  a click listener
  */
  onClick?: () => void;
  /**
   * State of the button
   */
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className="inline-flex flex-col items-center justify-center h-16 px-6 focus:pb-3 py-4 bg-blue-900 hover:bg-blue-900 disabled:bg-blue-400 focus:bg-yellow-800 text-white focus:text-black border-b-0 focus:border-b-4 border-black"
      role="button" // this is needed for accessibility
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <div className="inline-flex items-center justify-center h-6">
        <p className="text-lg font-bold leading-7 text-center">{props.label}</p>
      </div>
    </button>
  );
};

export default Button;
