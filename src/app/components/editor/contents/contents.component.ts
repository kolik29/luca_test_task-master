import { Component, Input } from '@angular/core';
import { ContentsItemType } from 'src/app/models/contents-item-type.enum';

@Component({
  selector: 'app-editor-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent {

  @Input() contents: any[] = [];
  contentsItemType = ContentsItemType;
  newContent = {
    name: '',
    type: this.contentsItemType.lesson
  }

  add(): void {
    this.contents.push(this.newContent);
    this.newContent = {
      name: '',
      type: this.contentsItemType.lesson
    }
  }

  remove(i: number): void {
    this.contents.splice(i, 1);
  }

}
