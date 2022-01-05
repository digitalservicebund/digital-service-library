import * as React from "react";
import { SVGProps } from "react";

const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#cloud_svg__a)">
      <path d="M21 12c3.93 0 7.32 2.79 8.085 6.645l.45 2.25 2.295.165A4.47 4.47 0 0 1 36 25.5c0 2.475-2.025 4.5-4.5 4.5H12c-3.315 0-6-2.685-6-6 0-3.075 2.295-5.64 5.34-5.955l1.605-.165.75-1.425C15.12 13.71 17.91 12 21 12Zm0-3c-4.335 0-8.1 2.46-9.975 6.06A8.991 8.991 0 0 0 3 24c0 4.965 4.035 9 9 9h19.5c4.14 0 7.5-3.36 7.5-7.5 0-3.96-3.075-7.17-6.975-7.44C31.005 12.885 26.46 9 21 9Z" />
    </g>
    <defs>
      <clipPath id="cloud_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCloud;
