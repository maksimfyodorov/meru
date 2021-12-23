import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MembersComponent {
  members = ['Иванов Иван', 'Петров Сергей', 'Евдокимов Алексей'];
  newMembers = ['Иванов Иван Иванович', 'Иванова Мария Дмитриевна', 'Ивочкина Александра Сергеевна'];

  constructor() { }

  onClose(member): void {
    console.log('closed member:', member);
  }

  addMember(member): void {
    this.members.push(member);
  }
}
