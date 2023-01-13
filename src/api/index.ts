import { ApiDiscover, ApiShowItem } from '@models/Api';

// FIXME: разобраться, почему ругается typescript
// @ts-ignore
export const getApiBaseUrl = import.meta.env.PROD ? '../../api' : 'api';

export const fetchDiscover = async () => {
  const result = await fetch(getApiBaseUrl + '/discover');
  const data = (await result.json()) as ApiDiscover;
  return data;
};

export const fetchGetBackgrounds = async () => {
  const discover = await fetchDiscover();

  return discover.backgrounds.map(({ url }) => getApiBaseUrl + '/' + url);
};

export const fetchGetShowList = async () => {
  const discover = await fetchDiscover();

  return discover.items as ApiShowItem[];
};

export const fetchSearchShowList = async (searchKeys: string) => {
  const arrayOfSearchKeys = searchKeys.toLowerCase().split(' ');

  const discover = await fetchDiscover();

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
  ) as ApiShowItem[];
};
