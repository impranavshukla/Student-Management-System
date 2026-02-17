import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  constructor(private http:HttpClient,private router:Router) {}

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
  this.http.post('http://localhost:3000/teachers', this.signupForm.value).subscribe((res:any)=>{
    this.router.navigateByUrl('/home');
    localStorage.setItem('teacher',JSON.stringify(res));
    alert('Sign Up Successful!');
  });
 }
}
