import { ApiShowItem } from '@models/Api';

export interface ShowListProps extends React.AllHTMLAttributes<HTMLElement> {
  showList: ApiShowItem[];
  isSearchMode: boolean;
  isLoading: boolean;
}
