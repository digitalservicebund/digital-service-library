import React, { Children } from "react";
import "../../index.css";

export interface FooterProps {
  /**
  The childrens within the Footer container
  */
  children?: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 py-4 bg-grey-200 border-grey-400 border-t ">
      {props.children}
    </div>
  );
};

export default Footer;
