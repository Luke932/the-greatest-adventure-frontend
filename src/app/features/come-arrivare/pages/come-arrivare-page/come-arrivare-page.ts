import { Component } from '@angular/core';
import { Navbar } from '../../../../shared/components/navbar/navbar';
import { Footer } from '../../../../shared/components/footer/footer';

@Component({
  imports: [
    Navbar,
    Footer
  ],
  selector: 'app-come-arrivare-page',
  styleUrl: './come-arrivare-page.css',
  templateUrl: './come-arrivare-page.html',
})
export class ComeArrivarePage {}
