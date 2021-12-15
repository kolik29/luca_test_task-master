import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plan } from '../../../models/plan.model';

@Component({
  selector: 'app-editor-course-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss'],
})
export class PlansComponent {
  @Input() plans: Plan[] = [];
  newPlan: Plan = {
    name: '',
    price: 0,
    advantages: []
  }
  @Output() updateCourseEvent = new EventEmitter;

  updateCourse() {
    this.updateCourseEvent;
  }

  add(): void {
    this.plans.push(this.newPlan);
    this.newPlan = {
      name: '',
      price: 0,
      advantages: []
    };
  }

  remove(index: number): void {
    this.plans.splice(index);
  }
}
