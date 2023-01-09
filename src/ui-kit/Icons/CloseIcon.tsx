import literalSizeToNumericSize from './utils/literalSizeToNumericSize';

import { ICON_SIZE } from './types';

import { BaseIconProps } from './types';

export const CloseIcon = ({ size = ICON_SIZE.MEDIUM, ...props }: BaseIconProps) => {

  return (
    <svg
      // width={numericSize}
      // height={numericSize}
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M2.53896 0.591406C1.99835 0.0385418 1.12185 0.0385418 0.581242 0.591406C0.040627 1.14428 0.0406282 2.04064 0.581242 2.59351L7.04166 9.20038L0.972528 15.4071C0.431924 15.9599 0.431924 16.8563 0.972528 17.4091C1.51314 17.962 2.38964 17.962 2.93025 17.4091L8.99938 11.2025L15.0684 17.409C15.609 17.9619 16.4855 17.9619 17.0261 17.409C17.5667 16.8562 17.5667 15.9598 17.0261 15.407L10.9571 9.20038L17.4173 2.59364C17.958 2.04079 17.958 1.14441 17.4173 0.591542C16.8768 0.0386823 16.0002 0.0386823 15.4597 0.591542L8.99938 7.19828L2.53896 0.591406Z'
        fill='#393939'
      />
    </svg>
  );
};
