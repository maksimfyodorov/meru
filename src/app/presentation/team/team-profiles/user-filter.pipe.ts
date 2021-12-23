import { Pipe, PipeTransform } from '@angular/core';
import { TeamProfilesTableMeta } from './team-profiles.model';

@Pipe({
  name: 'userFilter',
})
export class UserFilterPipe implements PipeTransform {
  transform(users: TeamProfilesTableMeta[], searchQuery: string): TeamProfilesTableMeta[] {
    if (!searchQuery || !Array.isArray(users)) {
      return users;
    } else {
      return users.filter((user) => user.name?.toLowerCase().includes(searchQuery.toLowerCase()));
    }
  }
}
