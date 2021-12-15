import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlanAdvantage } from '../../../../models/plan-advantage.model';

@Component({
  selector: 'app-editor-course-plans-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss'],
})
export class AdvantagesComponent {
  @Input() advantages: PlanAdvantage[] | undefined;
  newAdvantage: PlanAdvantage = {
    available: true,
    title: '',
  };
  @Output() updateCourseEvent = new EventEmitter;

  updateCourse() {
    this.updateCourseEvent;
  }

  add(): void {
    if (this.advantages)
      this.advantages.push(this.newAdvantage);
    else
      this.advantages = [this.newAdvantage];

    this.newAdvantage = {
      available: true,
      title: '',
    };
  }

  remove(index: number): void {
    if (this.advantages) this.advantages.splice(index, 1);
  }
}
