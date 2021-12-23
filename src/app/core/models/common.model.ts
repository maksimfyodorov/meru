export interface IEntry<T> {
  [key: string]: T;
}

export interface IObjectEntries extends Array<IObjectEntry> {
}

export interface IObjectComplexEntries extends Array<IObjectComplexEntry> {
}

export interface IObjectEntry {
  key: string;
  value: any;
}

export interface IObjectComplexEntry extends IEntry<any>, Omit<IObjectEntry, 'value'> {
}
