export interface IIndexedDbResponse {
  url: string;
  data: any;
}

export interface IIndexedDbOptionsRecord<T = any> extends Record<string, string | T> {
  name: string;
  value: T;
}

export interface IStoreItems extends Array<IStoreItem> {
}

export interface IStoreItem extends Record<string, any> {
}
