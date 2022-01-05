import * as React from "react";
import { SVGProps } from "react";

const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m23.433 15.033 1.534 1.534-15.1 15.1H8.333v-1.534l15.1-15.1Zm6-10.033c-.416 0-.85.167-1.166.483l-3.05 3.05 6.25 6.25 3.05-3.05c.65-.65.65-1.7 0-2.35l-3.9-3.9A1.637 1.637 0 0 0 29.433 5Zm-6 5.317L5 28.75V35h6.25l18.433-18.433-6.25-6.25Z" />
  </svg>
);

export default SvgPencil;
