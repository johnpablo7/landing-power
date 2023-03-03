import { SVGProps } from "react";

const ButtomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      opacity={0.15}
      d="M0 24C0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24S0 37.255 0 24Z"
      fill="#706FE5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.974 23.092c.703.406.7 1.408 0 1.815l-7.858 4.57c-.707.413-1.616-.084-1.616-.908v-9.142c0-.919.978-1.279 1.616-.908l7.858 4.573Z"
      fill="#706FE5"
    />
  </svg>
);

export default ButtomIcon;
