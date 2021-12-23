import { IUser } from '@shared/http/models/database.model';

export const findsTeammate = (users: IUser[], groups: number[]) => {
  return users.filter((user) => {
    let isTeammate = false;
    for (const teamId of user.labelGroups) {
      if (groups.includes(teamId)) {
        isTeammate = true;
        break;
      }
    }
    return isTeammate || user.category === 3;
  });
};
