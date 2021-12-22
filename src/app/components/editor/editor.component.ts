import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, from, observable, Observable, Observer, of, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Course } from 'src/app/models/course.model';
import { DataService } from 'src/app/services/data/data.service';
import { DurationUnit } from "../../models/duration-unit.enum";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  courseId: string = '';
  course: Course | any;
  course$: any;
  durationUnits = DurationUnit;
  currentDate: Date = new Date();
  courses$ = this.dataService.courses$;

  name: BehaviorSubject<string> = new BehaviorSubject('name test');

  courseForm = new FormGroup({
    name: new FormControl('')
  })

  constructor(
    private readonly dataService: DataService,
    private route: ActivatedRoute
  ) {    
    this.route.params
      .subscribe(params => {
        this.courseId = params.id
        this.ngOnInit();
      })
  }

  ngOnInit(): void {
    this.courses$
      .subscribe(courses => {
        let courses$ = from(courses);

        courses$
          .pipe(
            filter(course => course.id === this.courseId)
          )
          .subscribe(course => this.course = course);
      })

    this.course$ = new BehaviorSubject(this.course);

    

    this.course$.subscribe(() => {
    })
  }

}
