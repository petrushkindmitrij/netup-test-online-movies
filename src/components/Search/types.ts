export interface SearchProps extends React.AllHTMLAttributes<HTMLElement> {
  onChangeSearchKeys: (searchKeys: string) => void;
  onStartType: () => void;
  onFinishType: () => void;
  onClickSearch: (searchKeys: string) => void;
  onResetSearch: () => void;
  searchKeys: string;
  isShowedResetSearchButton: boolean;
}
