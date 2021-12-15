import { Component } from '@angular/core';
import { DataService } from './services/data/data.service';
import { Course } from './models/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly dataService:DataService
  ) {}
  courses$ = this.dataService.courses$;

  extractCourseFromJSON(course: Course): String {
    return JSON.stringify(course, null, 4);
  }
}
