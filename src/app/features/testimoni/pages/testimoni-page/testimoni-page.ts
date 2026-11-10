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
  { telefono: '3895560379', whatsapp: '3895560379', email: '' }; 
  chiara =
  { telefono: '3285333608', whatsapp: '3285333608', email: '' }; }
