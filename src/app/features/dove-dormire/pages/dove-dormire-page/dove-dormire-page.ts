import { Component } from '@angular/core';
import { Navbar } from '../../../../shared/components/navbar/navbar';
import { Footer } from '../../../../shared/components/footer/footer';

@Component({
  imports: [
    Navbar,
    Footer
  ],
  selector: 'app-dove-dormire-page',
  styleUrl: './dove-dormire-page.css',
  templateUrl: './dove-dormire-page.html',
})
export class DoveDormirePage {}
