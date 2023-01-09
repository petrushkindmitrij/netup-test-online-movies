import { ShowItem } from '@models/ShowItem';

export interface ShowListProps extends React.AllHTMLAttributes<HTMLElement> {
  showList: ShowItem[];
  isSearchMode: boolean;
  isLoading: boolean;
}
