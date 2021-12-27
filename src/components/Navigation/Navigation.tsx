import React, { Children } from "react";
import "../../index.css";

export interface NavigationProps {
  /**
  The childrens within the Navigation container
  */
  children?: React.ReactNode;
}

const Navigation = (props: NavigationProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-1/12 p-2 px-4 bg-white">
      <div className="sticky top-0 p-4 w-full h-full">{props.children}</div>
    </div>
  );
};

export default Navigation;
