import * as React from "react";
import { SVGProps } from "react";

const SvgExport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M26.667 30v3.333H13.333V30h13.334Zm-8.334-16.683v13.35h3.334v-13.35h5L20 6.667l-6.667 6.65h5Z" />
  </svg>
);

export default SvgExport;
