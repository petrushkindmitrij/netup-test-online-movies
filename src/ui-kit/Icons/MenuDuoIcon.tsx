import literalSizeToNumericSize from "./utils/literalSizeToNumericSize";

import { ICON_SIZE } from "./types";

import { BaseIconProps } from "./types";

export const MenuDuoIcon = ({
  size = ICON_SIZE.MEDIUM,
  ...props
}: BaseIconProps) => {
  const numericSize = literalSizeToNumericSize(size);

  return (
    <svg
      width={numericSize}
      height={numericSize}
      viewBox='0 0 24 24'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21 16H3V14H21V16ZM21 10H3V8H21V10Z" fill="#15060D" />
    </svg>
  );
};
