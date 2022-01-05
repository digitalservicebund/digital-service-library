import * as React from "react";
import { SVGProps } from "react";

const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M27.65 14.317 20 21.95l-7.65-7.633-2.35 2.35 10 10 10-10-2.35-2.35Z" />
  </svg>
);

export default SvgChevronDown;
