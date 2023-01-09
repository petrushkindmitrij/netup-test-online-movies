import React from 'react';

import s from './Tag.module.scss';
import { createComponentClassNames } from '@utils/componentVariants';
import { TagProfile } from '@models/TagProfile';

interface TagProps
  extends React.AllHTMLAttributes<HTMLDivElement>,
    Omit<TagProfile, 'text'> {}

const variantClassName = createComponentClassNames('tag', s);

export const Tag: React.FC<TagProps> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <div className={variantClassName({ variant }, className)} {...props}>
      {children}
    </div>
  );
};
