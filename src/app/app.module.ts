import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorCourseComponent } from './editor/course/course.component';
import { ContentsComponent } from './editor/course/contents/contents.component';
import { PlansComponent } from './editor/course/plans/plans.component';
import { AdvantagesComponent } from './editor/course/plans/advantages/advantages.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditorCourseComponent,
    ContentsComponent,
    PlansComponent,
    AdvantagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
