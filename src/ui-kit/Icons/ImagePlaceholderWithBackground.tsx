import literalSizeToNumericSize from "./utils/literalSizeToNumericSize";

import { ICON_SIZE } from "./types";

import { BaseIconProps } from "./types";

export const ImagePlaceholderWithBackground = ({
  size = ICON_SIZE.EXTRA_LARGE,
  ...props
}: BaseIconProps) => {
  const numericSize = literalSizeToNumericSize(size);

  return (
    <svg
      width={numericSize}
      height={numericSize}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="12" fill="#03080D" fillOpacity="0.7" />
      <path
        d="M31 15H17C15.8954 15 15 15.8954 15 17V31C15 32.1046 15.8954 33 17 33H31C32.1046 33 33 32.1046 33 31V17C33 15.8954 32.1046 15 31 15Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 23C21.8807 23 23 21.8807 23 20.5C23 19.1193 21.8807 18 20.5 18C19.1193 18 18 19.1193 18 20.5C18 21.8807 19.1193 23 20.5 23Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 27.6364L27.6875 24L16 32"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
