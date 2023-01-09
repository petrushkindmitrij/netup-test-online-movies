import literalSizeToNumericSize from "./utils/literalSizeToNumericSize";

import { ICON_SIZE } from "./types";

import { BaseIconProps } from "./types";

export const UserRectangle = ({
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
      <path
        d="M2 7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7ZM7 4C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4H7Z"
        fill="#15060D"
      />
      <path
        d="M12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8ZM8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10Z"
        fill="#15060D"
      />
      <path
        d="M11.9998 17C9.44261 17 7.2567 18.6001 6.39342 20.8572L4.52539 20.1428C5.67496 17.1371 8.58655 15 11.9998 15C15.413 15 18.3246 17.1371 19.4742 20.1428L17.6061 20.8572C16.7429 18.6001 14.5569 17 11.9998 17Z"
        fill="#15060D"
      />
    </svg>
  );
};
