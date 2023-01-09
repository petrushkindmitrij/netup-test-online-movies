import classNames from 'classnames';

import s from './ShowList.module.scss';
import { Card } from '@components/Card';
import { ShowListProps } from './types';
import { buildCardPropsFromShowItemProps } from '@utils/buildCardPropsFromShowItem';

export const ShowList = ({
  className,
  showList,
  isSearchMode,
  isLoading,
  ...props
}: ShowListProps) => {
  return (
    <div className={classNames(s.container, className)} {...props}>
      <h2
        className={classNames(s.title, isSearchMode && s['title--searchMode'])}
      >
        {/* // TODO: сделать группировку по типам  */}
        {!isLoading &&
          (isSearchMode ? `TV Shows (${showList.length})` : 'in the spotlight')}
      </h2>
      {isLoading ? (
        <p className={s.informationLabel}>Загрузка</p>
      ) : showList.length ? (
        <ul className={s.cardList}>
          {showList.map(showItem => (
            <li className={s.cardItem} id={showItem.title}>
              <Card {...buildCardPropsFromShowItemProps(showItem)} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.informationLabel}>Ничего не найдено</p>
      )}
    </div>
  );
};
