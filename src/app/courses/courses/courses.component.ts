import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Course[] = [];
  displayedColumns = ['name', 'category']

  constructor(){
    this.courses = [{name: 'teste', category: 'teste', _id: '10'}];
  }

  ngOnInit(){

  }
}
