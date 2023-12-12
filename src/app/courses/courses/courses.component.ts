import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../service/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private coursesSerivice: CoursesService,
    private dialog: MatDialog    
  ){
    this.courses$ = this.coursesSerivice.findAllCourses().pipe(
      catchError(error => {
        this.onError('Erro ao carregar os cursos...')
        return of([])
      })
    );
  }

  onError(errorMsg: String){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(){
    
  }
}
