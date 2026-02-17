import { Component, signal } from '@angular/core';
import { StudentService } from '../../services/student-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
   styleUrls: ['./home.css']
})
export class Home {

  students = signal<any[]>([]);   

  constructor(private studentService: StudentService , private router:Router) {}

  ngOnInit(): void {
  this.getStudents();
}


getStudents() {
  this.studentService.getStudents().subscribe(data => {
    this.students.set(data);
  });
}


deleteStudent(id: any) {
  this.studentService.getStudentDelete(id).subscribe(() => {
    this.getStudents();   
  });
}



}
