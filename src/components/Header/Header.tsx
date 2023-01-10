import React from 'react';

import classNames from 'classnames';

import s from './Header.module.scss';
import { LogoIcon } from '@ui-kit/Icons';

export interface HeaderProps extends React.AllHTMLAttributes<HTMLElement> {}

export const Header: React.FC<HeaderProps> = props => {
  return (
    <header className={classNames(s.header)} {...props}>
      <div className={classNames(s.logoContainer)}>
        <LogoIcon />
      </div>
    </header>
  );
};
