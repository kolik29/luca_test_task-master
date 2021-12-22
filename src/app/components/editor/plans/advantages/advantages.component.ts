import { Component, Input, Output } from '@angular/core';
import { PlanAdvantage } from '../../../../models/plan-advantage.model';

@Component({
  selector: 'app-editor-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent {

  @Input() advantages: PlanAdvantage[] | undefined;

  newAdvantage: PlanAdvantage = {
    available: true,
    title: ''
  }

  add(): void {
    if (!this.advantages)
      this.advantages = [];
      
    this.advantages.push(this.newAdvantage);
    this.newAdvantage = {
      available: true,
      title: ''
    }
  }

  remove(i: number): void {
    if (this.advantages)
      this.advantages.splice(i, 1);
  }

}
