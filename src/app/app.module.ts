import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './components/editor/editor.component';
import { ContentsComponent } from './components/editor/contents/contents.component';
import { PlansComponent } from './components/editor/plans/plans.component';
import { AdvantagesComponent } from './components/editor/plans/advantages/advantages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    ContentsComponent,
    PlansComponent,
    AdvantagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
