export interface ApiBackgroundItem {
  url: string;
}

export interface ApiShowItem {
  id: string;
  type: string;
  title: string;
  imdb_rate: number;
  is_new: boolean;
  country: string;
  year: number;
  length: number;
  num_seasons: number;
  min_age: number;
  genres: string[];
  poster: string;
  keyframe: string;
}

export interface ApiDiscover {
  backgrounds: ApiBackgroundItem[];
  items: ApiShowItem[];
}
