import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  findAllCourses(){
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(2500),
      tap(courses => {console.log(courses)}));;
  }
}
