import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  
  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  constructor(private coursesSerivice: CoursesService){
    this.courses = this.coursesSerivice.findAllCourses();
  }

  ngOnInit(){

  }
}
