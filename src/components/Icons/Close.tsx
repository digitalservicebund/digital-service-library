import * as React from "react";
import { SVGProps } from "react";

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m31.667 10.683-2.35-2.35L20 17.65l-9.317-9.317-2.35 2.35L17.65 20l-9.317 9.317 2.35 2.35L20 22.35l9.317 9.317 2.35-2.35L22.35 20l9.317-9.317Z" />
  </svg>
);

export default SvgClose;
