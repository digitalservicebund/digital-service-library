import * as React from "react";
import { SVGProps } from "react";

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M25.833 23.333h-1.316l-.467-.45a10.785 10.785 0 0 0 2.617-7.05C26.667 9.85 21.817 5 15.833 5 9.85 5 5 9.85 5 15.833c0 5.984 4.85 10.834 10.833 10.834 2.684 0 5.15-.984 7.05-2.617l.45.467v1.316l8.334 8.317 2.483-2.483-8.317-8.334Zm-10 0a7.49 7.49 0 0 1-7.5-7.5c0-4.15 3.35-7.5 7.5-7.5s7.5 3.35 7.5 7.5-3.35 7.5-7.5 7.5Z" />
  </svg>
);

export default SvgSearch;
