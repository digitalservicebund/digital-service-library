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
    <div className="flex flex-1 items-center min-h-screen justify-center w-full bg-beige-100 m-0 p-2.5">
      {props.children}
    </div>
  );
};

export const MainWrapper = (props: MainProps) => {
  return <div className="flex flex-1 flex-col h-full">{props.children}</div>;
};

export default Main;
