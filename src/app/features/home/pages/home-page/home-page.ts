import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Navbar } from '../../../../shared/components/navbar/navbar';
import { Footer } from '../../../../shared/components/footer/footer';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterLink,
    Navbar,
    Footer
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {}