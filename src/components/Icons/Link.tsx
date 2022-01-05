import * as React from "react";
import { SVGProps } from "react";

const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.5 20a5.171 5.171 0 0 1 5.167-5.167h6.666v-3.166h-6.666A8.336 8.336 0 0 0 3.333 20c0 4.6 3.734 8.333 8.334 8.333h6.666v-3.166h-6.666A5.171 5.171 0 0 1 6.5 20Zm6.833 1.667h13.334v-3.334H13.333v3.334Zm15-10h-6.666v3.166h6.666A5.171 5.171 0 0 1 33.5 20a5.171 5.171 0 0 1-5.167 5.167h-6.666v3.166h6.666c4.6 0 8.334-3.733 8.334-8.333s-3.734-8.333-8.334-8.333Z" />
  </svg>
);

export default SvgLink;
