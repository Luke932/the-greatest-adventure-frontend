import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../../shared/components/navbar/navbar';
import { Footer } from '../../../../shared/components/footer/footer';

@Component({
  imports: [
    RouterLink,
    Navbar,
    Footer
  ],
  selector: 'app-giornata-page',
  styleUrl: './giornata-page.css',
  templateUrl: './giornata-page.html',
})
export class GiornataPage {}
