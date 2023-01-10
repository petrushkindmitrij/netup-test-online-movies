import { TagProfile } from '@models/TagProfile';

export interface CardProps
  extends Omit<
    React.AllHTMLAttributes<HTMLElement>,
    'id' | 'name' | 'children'
  > {
  imageLink: string;
  changeImageLink: string;
  cardName: string;
  cardDetails: string;
  cardGenres: string;
  tags?: TagProfile[];
}
