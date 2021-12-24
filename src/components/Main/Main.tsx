import React, { Children } from "react";
import "../../index.css";

export interface MainProps {
  /**
  The childrens within the main content container
  */
  children?: React.ReactNode;
}

const Main = (props: MainProps) => {
  return (
    <div className="flex flex-0 items-center justify-center w-full bg-yellow-100 m-0 p-2.5">
      {props.children}
    </div>
  );
};

export default Main;
