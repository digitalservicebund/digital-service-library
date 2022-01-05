import * as React from "react";
import { SVGProps } from "react";

const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.317 12.35 21.95 20l-7.633 7.65 2.35 2.35 10-10-10-10-2.35 2.35Z" />
  </svg>
);

export default SvgChevronRight;
