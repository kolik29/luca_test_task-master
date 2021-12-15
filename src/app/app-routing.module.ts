import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorCourseComponent } from './editor/course/course.component';

const routes: Routes = [
  {
    path: 'editor/:id',
    component: EditorCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
