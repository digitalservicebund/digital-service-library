import * as React from "react";
import { SVGProps } from "react";

const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M31.667 15H25V5H15v10H8.333L20 26.667 31.667 15Zm-13.334 3.333v-10h3.334v10h1.95L20 21.95l-3.617-3.617h1.95ZM8.333 30h23.334v3.333H8.333V30Z" />
  </svg>
);

export default SvgDownload;
