import { Footer } from './../../components/footer/footer';

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,Footer],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {

    studentForm: FormGroup;

  constructor(
   
    private studentService: StudentService,
    private router: Router
  ) {
    this.studentForm = new FormGroup({
  name: new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]),

  email: new FormControl('', [
    Validators.required,
    Validators.email
  ]),

  age: new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(100)
  ])
});
  }

  submit() {
    if (this.studentForm.valid) {
      this.studentService.addStudent(this.studentForm.value).subscribe(() => {
        alert('Student Added Successfully');
        this.router.navigate(['/teacherLayout/home']);
      });
    }
  }
}


