// Imports
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
// Component Decorator
@Component({
  selector: 'app-root',
  template: `
  <p>I will animate</p>
  `,
  styles: [``],
  animations: [
    trigger('myAwesomeANimation', [


    ]),

  ]
  // styleUrls: ['./app.component.css']
})

// Component Class
export class AppComponent {

  constructor(private dataService:DataService) {

  }

  someProperty:string = '';

    ngOnInit() {
      console.log(this.dataService.checkList);

      this.someProperty = this.dataService.myData();
    }

  title = 'Google Internship';
  titleClass = 'red-title';
  googleLogo = 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png';
}
