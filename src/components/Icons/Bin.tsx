import * as React from "react";
import { SVGProps } from "react";

const SvgBin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M26.667 15v16.667H13.333V15h13.334Zm-2.5-10h-8.334l-1.666 1.667H8.333V10h23.334V6.667h-5.834L24.167 5ZM30 11.667H10v20C10 33.5 11.5 35 13.333 35h13.334C28.5 35 30 33.5 30 31.667v-20Z" />
  </svg>
);

export default SvgBin;
