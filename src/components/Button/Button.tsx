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
  /**
   * indicate the main action, one primary button at most in one section
   */
  primary?: boolean;
  /**
   * default - indicate a series of actions without priority
   */
  secondary?: boolean;
  /**
   * indicate a button with the lowest priority
   */
  tertiary?: boolean;
}

const Button = (props: ButtonProps) => {
  const { primary, tertiary } = props;
  if (primary) {
    return (
      <button
        className="box-border inline-flex flex-col items-center justify-center h-16 px-6 focus:pb-3 py-4 bg-yellow-900 hover:bg-dustyYellow disabled:bg-darkGrey-300 disabled:text-darkGrey-700 focus:bg-yellow-800 text-black focus:text-black border-4 border-transparent focus:border-darkGreen active:bg-yellow-800"
        role="button"
        disabled={props.disabled}
        onClick={props.onClick}
      >
        <div className="inline-flex items-center justify-center h-6">
          <p className="text-lg font-bold leading-7 text-center">
            {props.label}
          </p>
        </div>
      </button>
    );
  } else if (tertiary) {
    return (
      <button
        className="box-border inline-flex flex-col items-center justify-center h-16 px-6 focus:pb-3 py-4 bg-darkGrey-900 text-white hover:bg-dustyGrey disabled:bg-darkGrey-300 disabled:text-darkGrey-700 border-4 border-transparent focus:border-darkGreen active:bg-darkGrey-800"
        role="button"
        disabled={props.disabled}
        onClick={props.onClick}
      >
        <div className="inline-flex items-center justify-center h-6">
          <p className="text-lg font-bold leading-7 text-center">
            {props.label}
          </p>
        </div>
      </button>
    );
  } else {
    // secondary == default
    return (
      <button
        className="box-border inline-flex flex-col items-center justify-center h-16 px-6 focus:pb-3 py-4  bg-white text-blue-900 outline outline-offset-0 outline-1 outline-blue-900 hover:bg-blue-100  disabled:bg-darkGrey-300 disabled:text-darkGrey-700 disabled:outline-0 border-4 border-transparent focus:border-darkGreen active:bg-blue-50"
        role="button"
        disabled={props.disabled}
        onClick={props.onClick}
      >
        <div className="inline-flex items-center justify-center h-6">
          <p className="text-lg font-bold leading-7 text-center">
            {props.label}
          </p>
        </div>
      </button>
    );
  }
};

export default Button;
