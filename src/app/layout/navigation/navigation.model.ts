export interface INavigationItem {
  id: string;
  title: string;
  icon?: string;
  url: string;
  children?: INavigationItem[];
  disabled?: boolean;
  onlyForManager?: boolean;
  showOnlyOnMobile?: boolean;
}
export interface INavigations extends Array<INavigationItem> {}
