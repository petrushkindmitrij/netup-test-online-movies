import { ICON_SIZE } from './types';

import { BaseIconProps } from './types';

export const SearchIcon = ({ size = ICON_SIZE.MEDIUM, ...props }: BaseIconProps) => {
  return (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M11.56 11.0498L8.63387 8.17044C9.40013 7.33794 9.87095 6.23693 9.87095 5.0254C9.87058 2.4337 7.73583 0.333008 5.10228 0.333008C2.46873 0.333008 0.333984 2.4337 0.333984 5.0254C0.333984 7.6171 2.46873 9.71779 5.10228 9.71779C6.24016 9.71779 7.28379 9.32422 8.10355 8.66992L11.041 11.5606C11.1842 11.7016 11.4166 11.7016 11.5597 11.5606C11.7031 11.4196 11.7031 11.1908 11.56 11.0498Z'
        fill='#ABFFCE'
      />
    </svg>
  );
};
