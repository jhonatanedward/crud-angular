import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  findAllCourses() : Course[] {
    return [
      {name: 'teste', category: 'teste', _id: '10'}
    ];
  }
}
