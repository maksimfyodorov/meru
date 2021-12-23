export interface ITabs extends Array<ITab> {
}

export interface ITab extends Record<string, any> {
  label: string;
  value: any;
  icon?: string;
}
