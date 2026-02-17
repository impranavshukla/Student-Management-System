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
      fullName: new FormControl('', Validators.required),
      rollNumber: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      attendancePercentage: new FormControl('', Validators.required),
      image: new FormControl('')
    });
  }

  submit() {
    if (this.studentForm.valid) {
      this.studentService.addStudent(this.studentForm.value).subscribe(() => {
        alert('Student Added Successfully');
        this.router.navigate(['/home']);
      });
    }
  }
}


