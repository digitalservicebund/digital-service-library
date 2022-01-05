import * as React from "react";
import { SVGProps } from "react";

const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.35 25.683 20 18.05l7.65 7.633 2.35-2.35-10-10-10 10 2.35 2.35Z" />
  </svg>
);

export default SvgChevronUp;
