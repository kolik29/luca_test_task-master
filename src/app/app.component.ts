import { Component } from '@angular/core';
import { DataService } from './services/data/data.service';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly dataService:DataService,
    private location: Location
  ) {
    dataService.courses$.subscribe(() => {
      console.log('test')
    })
  }
  courses$ = this.dataService.courses$;

  changeUrl(url: string): void {
    this.location.go(url);
  }
}
