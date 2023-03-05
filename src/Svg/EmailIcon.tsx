import { SVGProps } from "react";

const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.7} fill="#2E3E5C">
      <path d="M12.694 15.032a1.347 1.347 0 0 1-.708.198c-.227 0-.482-.056-.709-.198L0 8.146V17.3a3.543 3.543 0 0 0 3.542 3.542h16.916A3.543 3.543 0 0 0 24 17.299V8.146l-11.306 6.886Z" />
      <path d="M20.458 3.16H3.542A3.521 3.521 0 0 0 .113 5.935l11.901 7.254 11.873-7.254a3.521 3.521 0 0 0-3.429-2.777Z" />
    </g>
  </svg>
);

export default EmailIcon;
