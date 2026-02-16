import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
 signupForm = new FormGroup({
  fullName: new FormControl('', [Validators.required,Validators.minLength(3)]),
  email: new FormControl('', [Validators.required,Validators.email]),
  phone: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{10}$')]),
  employeeId: new FormControl('', [Validators.required,Validators.minLength(3)]),
  subject: new FormControl('', [Validators.required,]),
  department: new FormControl('', [Validators.required,]),
  experience: new FormControl('', [Validators.required,]),
  password: new FormControl('', [Validators.required,]),
 });

 onSignUp(){
  console.log(this.signupForm.value);
 }
}
