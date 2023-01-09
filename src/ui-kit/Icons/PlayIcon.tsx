import literalSizeToNumericSize from './utils/literalSizeToNumericSize';

import { ICON_SIZE } from './types';

import { BaseIconProps } from './types';

export const PlayIcon = ({ ...props }: BaseIconProps) => {
  return (
    <svg
      width='10'
      height='12'
      viewBox='0 0 10 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M1.50617 11.8332C1.17695 12.0429 0.843457 12.0549 0.505679 11.869C0.16856 11.6838 0 11.3975 0 11.0103V0.99001C0 0.602754 0.16856 0.316185 0.505679 0.130302C0.843457 -0.0549357 1.17695 -0.0426725 1.50617 0.167091L9.55556 5.17722C9.85185 5.37084 10 5.64515 10 6.00014C10 6.35512 9.85185 6.62943 9.55556 6.82306L1.50617 11.8332Z'
        fill='#ABFFCE'
      />
    </svg>
  );
};
