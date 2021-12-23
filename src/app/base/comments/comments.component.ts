import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {IComment} from './comments.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent {
  public newComment = '';

  @Input() public items: IComment[] = [];
  @Input() public userAvatar: string = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png';
  @Output() public addComment = new EventEmitter<string>();

  public handleAddComment(): void {
    this.addComment.emit(this.newComment);
    this.newComment = '';
  }
}
