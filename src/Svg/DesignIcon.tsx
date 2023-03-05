import { SVGProps } from "react";

const DesignIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.143 0v24h-4.572V0h4.572Z" fill="#706FE5" />
    <path
      d="M18.286 0H20a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4h-1.714V0ZM11.429 0v24H6.857V0h4.572Z"
      fill="#2E3E5C"
    />
    <path
      d="M5.714 0v24H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h1.714Z"
      fill="#706FE5"
    />
  </svg>
);

export default DesignIcon;
