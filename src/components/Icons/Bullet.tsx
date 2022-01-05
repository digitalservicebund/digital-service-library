import * as React from "react";
import { SVGProps } from "react";

const SvgBullet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20 16c-2.208 0-4 1.792-4 4s1.792 4 4 4 4-1.792 4-4-1.792-4-4-4Z" />
  </svg>
);

export default SvgBullet;
