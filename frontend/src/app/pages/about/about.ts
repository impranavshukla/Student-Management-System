import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-about',
  imports: [CommonModule,Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
