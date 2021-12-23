import { GlobalSearchType, IGlobalSearchResult } from '@shared/global-search/global-search.model';

export type SearchType = GlobalSearchType | 'all';
// tslint:disable-next-line:no-empty-interface
export interface IResult extends IGlobalSearchResult {

}
