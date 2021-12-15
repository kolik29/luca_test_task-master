import { Component, Input, OnInit } from '@angular/core';
import { ContentsItem } from '../../../models/contents-item.model';
import { ContentsItemType } from '../../../models/contents-item-type.enum';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editor-course-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
})
export class ContentsComponent implements OnInit {
  @Input() contents: ContentsItem[] = [];
  contentsItemType = ContentsItemType;
  сontentsItemTypeModel = new FormControl(ContentsItemType);
  newContentsItem: ContentsItem = {
    name: '',
    type: this.contentsItemType.lesson,
  };

  ngOnInit(): void {}

  add(): void {
    this.contents.push(this.newContentsItem);
    this.newContentsItem = {
      name: '',
      type: this.contentsItemType.lesson,
    };
  }

  remove(index: number): void {
    this.contents.splice(index, 1);
  }
}
