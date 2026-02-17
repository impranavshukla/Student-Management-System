import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-teacher-layout',
  standalone: true,
  imports: [Navbar,Footer,RouterOutlet],
  templateUrl: './teacher-layout.html',
  styleUrl: './teacher-layout.css',
})
export class TeacherLayout {

}
