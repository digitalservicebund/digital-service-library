import React, { Children } from "react";
import "../../index.css";

export interface LayoutProps {
  /**
  The childrens within the layout wrapper
  */
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className="max-w-full w-full flex flex-col">
      <div className="flex flex-1">{props.children}</div>
    </div>
  );
};

export default Layout;
