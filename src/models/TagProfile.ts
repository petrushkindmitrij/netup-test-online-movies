export interface TagProfile {
  text: string;
  variant: TAG_VARIANT;
}

export enum TAG_VARIANT {
  NEW = 'NEW',
  RATING = 'RATING',
}
