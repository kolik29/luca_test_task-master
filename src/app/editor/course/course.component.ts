import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data/data.service';
import { Course } from '../../models/course.model';
import { DurationUnit } from '../../models/duration-unit.enum';

@Component({
  selector: 'app-editor-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class EditorCourseComponent implements OnInit {
  courses$ = this.dataService.courses$;
  course: Course | any;
  durationUnit = DurationUnit;
  currentDate = new Date();

  constructor(
    private router: Router,
    private readonly dataService: DataService
  ) {}

  async ngOnInit() {
    let url = this.router.url.split('/'),
      courseId = url[url.length - 1];

    await this.courses$.subscribe(async (items) => {
      this.course = items.filter((item, i): Course | undefined => {
        if (i == Number(courseId)) return item;
        else return undefined;
      })[0];
    });
  }

  parseDate(dateString: string): Date {
    return new Date(dateString);
  }

  updateCourse() {
    this.dataService.updateCourse(this.course.id, this.course);
  }

  async showCourse() {
    await this.courses$.subscribe(async (items) => {
      items.filter((item) => {
        console.log(item);
      })[0];
    });
  }
}
