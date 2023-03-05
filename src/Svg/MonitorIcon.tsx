import { SVGProps } from "react";

const MonitorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m29.222 34.56 1.536 7.68H33.6a.96.96 0 1 1 0 1.92H14.4a.96.96 0 1 1 0-1.92h3.264l1.536-7.68h-8.64a6.722 6.722 0 0 1-6.652-5.76h40.184a6.721 6.721 0 0 1-6.652 5.76h-8.218Z"
      fill="#2E3E5C"
    />
    <path
      d="M3.84 26.88V6.72a2.88 2.88 0 0 1 2.88-2.88h34.56a2.88 2.88 0 0 1 2.88 2.88v20.16H3.84Z"
      fill="#706FE5"
    />
  </svg>
);

export default MonitorIcon;
