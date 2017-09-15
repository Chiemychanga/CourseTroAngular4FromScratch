import { Injectable } from '@angular/core';

// Decorator - leave this for future-proofing and ensuring consistency.
@Injectable()
export class DataService {

  constructor() { }

  checkList = [
    'CodeFights.com','Projects','CS Courses','Experience'
  ];

  myData() {
    return 'This is my data, man!';
  }
}
