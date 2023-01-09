import { useCallback, useState } from 'react';

import classNames from 'classnames';

// import { Typography, TYPOGRAPHY_VARIANTS } from '../Typography';
import { Tag } from '@ui-kit/Tag';

import { CardProps } from './types';

import s from './Card.module.scss';
import { ButtonDetails } from './ButtonDetails';

export const Card: React.FC<CardProps> = ({
  cardName,
  cardDetails,
  cardGenres,
  tags,
  imageLink,
  changeImageLink,
  className,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onHover = useCallback(() => {
    setIsHovered(true);
  }, [isHovered]);

  const onOutHover = useCallback(() => {
    setIsHovered(false);
  }, [isHovered]);

  return (
    <div
      // ref={containerRef}
      onMouseOver={onHover}
      onMouseOut={onOutHover}
      className={classNames(s.wrapper, className)}
      {...props}
    >
      <a className={classNames(s.container)}>
        <figure className={s.imageContainer}>
          {tags && (
            <ul className={s.tagContainer}>
              {tags.map(tag => (
                <li id={tag.text}>
                  <Tag key={tag.text} variant={tag.variant} className={s.tag}>
                    {tag.text}
                  </Tag>
                </li>
              ))}
            </ul>
          )}
          <img
            className={s.image}
            src={isHovered ? changeImageLink : imageLink}
            alt='обложка контента'
          />

          <ButtonDetails className={s.buttonDetails} onClick={() => {}} />
        </figure>

        <h4 className={s.cardName}>{cardName}</h4>

        <p className={s.cardDetails}>{cardDetails}</p>
        <p className={s.cardGenres}>{cardGenres}</p>
      </a>
    </div>
  );
};
