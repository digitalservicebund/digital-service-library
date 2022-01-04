import React from "react";
import classNames from "classnames";
import invariant from "tiny-invariant";

interface VisualProps {
  /** indicates an alternative to the primary action */
  secondary?: boolean;
  /** indicates a miscellaneous action */
  tertiary?: boolean;
  /** small size */
  small?: boolean;
  /** tiny size */
  tiny?: boolean;
}

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VisualProps {}

export interface ButtonLinkProps
  extends React.ComponentPropsWithoutRef<"a">,
    VisualProps {}

function Button(props: ButtonProps): JSX.Element;
function Button(props: ButtonLinkProps): JSX.Element;
function Button(props: any) {
  const { secondary, tertiary, small, tiny, children, ...rest } = props;
  const Component = props.href ? "a" : "button";

  invariant(
    !(secondary === true && tertiary === true),
    "Button is both secondary and tertiary. Please choose one visual type."
  );
  invariant(
    !(small === true && tiny === true),
    "Button is both small and tiny. Please choose one size."
  );

  const commonClassNames =
    "inline-block px-6 leading-[1.58] font-bold max-w-full break-words focus:outline focus:outline-4 focus:outline-darkGreen disabled:bg-darkGrey-300 disabled:text-darkGrey-700 disabled:cursor-not-allowed";

  const className = classNames(
    commonClassNames,
    {
      "text-black bg-yellow-900 hover:bg-dustyYellow focus:bg-yellow-800 active:bg-yellow-600":
        !secondary && !tertiary,
      "text-blue-900 bg-white shadow-[inset_0_0_0_0.0625rem_currentColor] hover:bg-blue-100 active:bg-blue-50 disabled:shadow-none":
        secondary,
      "text-white bg-darkGrey-900 hover:bg-dustyGrey active:bg-darkGrey-800":
        tertiary,
      "py-5 text-lg": !small && !tiny,
      "py-3 text-base": small,
      "py-2 text-sm": tiny,
    },
    props.className
  );

  return (
    <Component {...rest} className={className}>
      {children}
    </Component>
  );
}

export default Button;
