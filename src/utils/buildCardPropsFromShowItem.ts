import { getApiBaseUrl } from '@api';
import { ApiShowItem } from '@models/Api';
import { TagProfile, TAG_VARIANT } from '@models/TagProfile';
import { getMinutesFromSeconds } from './time';

export const buildCardPropsFromShowItemProps = ({
  title,
  imdb_rate,
  is_new,
  country,
  year,
  length,
  num_seasons,
  min_age,
  genres,
  poster,
  keyframe,
}: ApiShowItem) => {
  const cardDetails = [
    country,
    year,
    getMinutesFromSeconds(length),
    num_seasons + ' seasons',
    min_age + '+',
  ]
    .filter(Boolean)
    .map(String)
    .join(' | ');

  const tags = [
    is_new && { text: 'New on NetUP TV', variant: TAG_VARIANT.NEW },
    { text: 'IMDB ' + imdb_rate, variant: TAG_VARIANT.RATING },
  ].filter(Boolean) as TagProfile[];

  return {
    cardName: title,
    cardDetails: cardDetails,
    cardGenres: genres.join(', '),
    tags: tags,
    imageLink: getApiBaseUrl + '/' + poster,
    changeImageLink: getApiBaseUrl + '/' + '../api/' + keyframe,
  };
};
