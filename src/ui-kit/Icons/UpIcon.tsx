import literalSizeToNumericSize from "./utils/literalSizeToNumericSize";

import { ICON_SIZE } from "./types";

import { BaseIconProps } from "./types";

export const UpIcon = ({ size = ICON_SIZE.MEDIUM, ...props }: BaseIconProps) => {
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
        d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071C16.3166 13.0976 15.6834 13.0976 15.2929 12.7071L13 10.4142V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16L11 10.4142L8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z"
        fill="#15060D"
      />
    </svg>
  );
};
