import * as React from "react";
import { SVGProps } from "react";

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M31.667 21.667h-10v10h-3.334v-10h-10v-3.334h10v-10h3.334v10h10v3.334Z" />
  </svg>
);

export default SvgPlus;
