import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import s from './SearchPage.module.scss';
import { Header } from '@components/Header';
import { Search } from '@components/Search';
import { ShowList } from '@components/ShowList';
import { ShowItem } from '@models/ShowItem';
import {
  fetchGetBackgrounds,
  fetchGetShowList,
  fetchSearchShowList,
} from '@api/apiService';

import debounce from 'lodash.debounce';
import { rotateBackground } from '@hooks/rotateBackground';

export const SearchPage = () => {
  const backgroundImageContainerRef = useRef<HTMLElement>(null);
  const [isStartedType, setIsStartedType] = useState<boolean>(false);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showList, setShowList] = useState<ShowItem[]>([]);
  const [searchKeys, setSearchKeys] = useState<string>('');

  const onClickSearch = (searchKeys: string) => {
    if (searchKeys) {
      setIsLoading(true);
      debounce(() => {
        setShowList(fetchSearchShowList(searchKeys));
        setIsLoading(false);
      }, 1000)();
    }
  };
  const isSearchMode = isStartedType || !!searchKeys;

  const [previousBackground, currentBackground] =
    rotateBackground(fetchGetBackgrounds);

  const turnOffAnimationPlaying = () => {
    setIsAnimationPlaying(false);
  };

  useEffect(() => {
    !isSearchMode && setShowList(fetchGetShowList());
  }, [isSearchMode]);

  useEffect(() => {
    setIsAnimationPlaying(true);
  }, [currentBackground]);

  useEffect(() => {
    if (!backgroundImageContainerRef?.current) {
      return;
    }
    backgroundImageContainerRef?.current?.addEventListener(
      'animationend',
      turnOffAnimationPlaying
    );
    return () =>
      backgroundImageContainerRef?.current?.addEventListener(
        'animationend',
        turnOffAnimationPlaying
      );
  }, [backgroundImageContainerRef?.current]);

  return (
    <div className={s.searchPage}>
      <figure
        ref={backgroundImageContainerRef}
        className={s.backgroundImageContainer}
      >
        {previousBackground && (
          <img
            className={classNames(
              s.backgroundImage,
              isAnimationPlaying && s['backgroundImage--disappear']
            )}
            src={`/src/api/${previousBackground}`}
            alt='фон'
          />
        )}
        {currentBackground && (
          <img
            className={classNames(
              s.backgroundImage,
              isAnimationPlaying && s['backgroundImage--appear']
            )}
            src={`/src/api/${currentBackground}`}
            alt='фон'
          />
        )}
      </figure>
      <Header />
      <section className={s.sectionSearch}>
        <Search
          style={{ marginTop: isSearchMode ? '120px' : '252px' }}
          searchKeys={searchKeys}
          onChangeSearchKeys={searchKeys => setSearchKeys(searchKeys)}
          onStartType={() => {
            setIsStartedType(true);
          }}
          onFinishType={() => {
            setIsStartedType(false);
          }}
          onClickSearch={onClickSearch}
          onResetSearch={() => {
            setIsStartedType(false);
            setSearchKeys('');
          }}
          isShowedResetSearchButton={isSearchMode}
        />
      </section>
      <section
        className={classNames(
          s.sectionShowList,
          isStartedType && s['sectionShowList--hidden']
        )}
      >
        <ShowList
          showList={showList}
          isSearchMode={isSearchMode}
          isLoading={isLoading}
        />
      </section>
    </div>
  );
};
