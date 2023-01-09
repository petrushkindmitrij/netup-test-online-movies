import React, {  useRef } from 'react';

import classNames from 'classnames';

import { CloseIcon, SearchIcon } from '@ui-kit';

import s from './Search.module.scss';
import { SearchProps } from './types';

export const Search = ({
  className,
  searchKeys,
  onChangeSearchKeys,
  onStartType,
  onFinishType,
  onClickSearch,
  onResetSearch,
  isShowedResetSearchButton,
  ...props
}: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={classNames(s.container, className)} {...props}>
      <div className={s.inputContainer}>
        <input
          ref={inputRef}
          value={searchKeys}
          onChange={e => onChangeSearchKeys(e.target.value)}
          onFocus={onStartType}
          onBlur={onFinishType}
          className={s.input}
          type='text'
          placeholder='Поиск по названию или тегу'
        />
        {isShowedResetSearchButton && (
          <CloseIcon className={s.resetSearchButton} onClick={onResetSearch} />
        )}
      </div>
      <button className={s.button} onClick={() => onClickSearch(searchKeys)}>
        <p>search </p>
        <SearchIcon className={s.icon} />
      </button>
    </div>
  );
};
