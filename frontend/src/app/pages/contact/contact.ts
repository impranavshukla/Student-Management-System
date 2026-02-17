import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,Footer],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
