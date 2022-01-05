import * as React from "react";
import { SVGProps } from "react";

const SvgExternal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M31.667 31.667H8.333V8.333H20V5H8.333C6.483 5 5 6.5 5 8.333v23.334A3.332 3.332 0 0 0 8.333 35h23.334C33.5 35 35 33.5 35 31.667V20h-3.333v11.667ZM23.333 5v3.333h5.984L12.933 24.717l2.35 2.35 16.384-16.384v5.984H35V5H23.333Z" />
  </svg>
);

export default SvgExternal;
