import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private http: HttpClient,private router:Router) {}

  loginData: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onLogin() {
    this.http.get(`http://localhost:3000/teachers?email=${this.loginData.value.email}&password=${this.loginData.value.password}`).subscribe((res) => {
        localStorage.setItem('loginUser', JSON.stringify(res));
        this.router.navigateByUrl('/teacherLayout/home');
      });
  }
}
