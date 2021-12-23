export interface IUser {
  id: number;
  name: string;
  avatarUrl: string;
  tokenUUID?: string;
  authorization?: string;
  deviceId?: string;
  labelGroups?: number[];
  labelGroupsManager?: number[];
  managers?: number[];

  setLabelGroupsManager?(labelGroups: Record<string, any>[]): void;
}

export class User implements IUser {
  authorization?: string;
  avatarUrl: string;
  deviceId?: string;
  id: number;
  labelGroupsManager: number[];
  labelGroups: number[];
  name: string;
  tokenUUID?: string;
  managers?: number[] = [];
  buildingsSequence?: number[];
  floorMapsSequence?: number[];

  constructor(user: Partial<IUser>) {
    Object.assign(this, user);
  }

  setLabelGroupsManager(labelGroups: Record<string, any>[]): this {
    this.labelGroupsManager = labelGroups
      .filter(labelGroup => labelGroup.managers.includes(this.id))
      .map(({ id }) => id);

    return this;
  }

  setManagers(labelGroups: Record<string, any>[]): this {
    this.managers = this.labelGroups
      .flatMap(labelGroup =>
        labelGroups.find(({ id }) => id === labelGroup)?.managers || []
      )
      .filter(((value, index, self) => self.indexOf(value) === index))
      .sort();

    return this;
  }
}

export class Users extends Array<User> {
  constructor(users: Array<Partial<IUser>>) {
    if (typeof users === 'number') {
      super(users);
      return;
    }

    super(users.length || 0);
    users.forEach((user, index) => this[index] = new User(user));
  }

  public getUserById(id: number): User | null {
    return this.find(user => user.id === id) || null;
  }
}
