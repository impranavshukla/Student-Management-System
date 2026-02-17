import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  
    Url = 'http://localhost:3000/students'; 

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get<any>(this.Url);
  }

  addStudent(student: any) {
  return this.http.post(this.Url, student);
}

}
