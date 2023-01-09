export enum ICON_SIZE {
  EXTRA_LARGE = "extra-large",
  LARGE = "large",
  SMALL = "small",
  MEDIUM = "medium",
}

export interface BaseIconProps {
  size?: ICON_SIZE;
  title?: string;
  desc?: string;
  [key: string]: unknown;
}

