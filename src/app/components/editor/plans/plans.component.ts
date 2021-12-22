import { Component, Input } from '@angular/core';
import { Plan } from 'src/app/models/plan.model';
import { PlanAdvantage } from 'src/app/models/plan-advantage.model';

@Component({
  selector: 'app-editor-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {

  @Input() plans: Plan[] = [];

  newAdvantage: PlanAdvantage = {
    available: true,
    title: ''
  }

  newPlan: Plan = {
    name: '',
    price: 0
  }

  add(): void {
    this.plans.push(this.newPlan);
    this.newPlan = {
      name: '',
      price: 0
    }
  }

  remove(i: number): void {
    this.plans.splice(i, 1);
  }

}
