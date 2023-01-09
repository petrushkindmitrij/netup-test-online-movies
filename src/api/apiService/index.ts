import { ShowItem } from '@models/ShowItem';
import discover from '../discover.json';

export const fetchGetBackgrounds = () =>
  discover.backgrounds.map(({ url }) => url);

export const fetchGetShowList = () => discover.items as ShowItem[];

export const fetchSearchShowList = (searchKeys: string) => {
  const arrayOfSearchKeys = searchKeys.toLowerCase().split(' ');
  return discover.items.filter(item =>
    Object.values(item)
      // преобразовываем параметры айтемов в строки
      .map(itemParameters =>
        (Array.isArray(itemParameters)
          ? itemParameters.join(' ')
          : String(itemParameters)
        ).toLowerCase()
      )
      .some(itemParameters =>
        arrayOfSearchKeys.some(searchKey => itemParameters.includes(searchKey))
      )
  ) as ShowItem[];
};
