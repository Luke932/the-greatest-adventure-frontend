import { Component } from '@angular/core';
import { Navbar } from '../../../../shared/components/navbar/navbar';
import { Footer } from '../../../../shared/components/footer/footer';

@Component({
  imports: [
    Navbar,
    Footer
  ],
  selector: 'app-testimoni-page',
  styleUrl: './testimoni-page.css',
  templateUrl: './testimoni-page.html',
})
export class TestimoniPage { 
  alessandro = 
  { telefono: '3805952885', whatsapp: '3805952885', email: '' };
  eleonora =
  { telefono: '', whatsapp: '', email: '' }; 
  chiara =
  { telefono: '', whatsapp: '', email: '' }; }
