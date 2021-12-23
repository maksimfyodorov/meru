import { ITag, IWorkplaceGroup } from '@shared/http/models/database.model';

export const getTags = (ids: number[], tags: ITag[]): string[] => {
  return tags.filter((t) => ids.includes(t.id)).map((tag) => tag.name);
};

export const getWorkplaceGroupsNames = (ids: number[], workplaceGroups: IWorkplaceGroup[]): string[] => {
  return workplaceGroups.filter((wG) => ids.includes(wG.id)).map((wG) => wG.name);
};
 