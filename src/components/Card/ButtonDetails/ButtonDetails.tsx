import React from 'react';

import classNames from 'classnames';

import { ButtonProps } from './types';

import s from './Button.module.scss';
import { PlayIcon } from '@ui-kit/Icons/PlayIcon';

export const ButtonDetails: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={classNames(s.button, className)} {...props}>
      <p className={s.text}>More details</p>
      <PlayIcon />
    </button>
  );
};
