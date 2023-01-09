import literalSizeToNumericSize from "./utils/literalSizeToNumericSize";

import { ICON_SIZE } from "./types";

import { BaseIconProps } from "./types";

export const ImagePlaceholderIcon = ({
  size = ICON_SIZE.MEDIUM,
  ...props
}: BaseIconProps) => {
  const numericSize = literalSizeToNumericSize(size);

  return (
    <svg
      width={numericSize}
      height={numericSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke="#15060D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11C9.88071 11 11 9.88071 11 8.5C11 7.11929 9.88071 6 8.5 6C7.11929 6 6 7.11929 6 8.5C6 9.88071 7.11929 11 8.5 11Z"
        stroke="#15060D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 15.6364L15.6875 12L4 20"
        stroke="#15060D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
