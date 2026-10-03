import { Component } from '@angular/core';
import { Navbar } from '../../../../shared/components/navbar/navbar';
import { Footer } from '../../../../shared/components/footer/footer';

@Component({
  imports: [
    Navbar,
    Footer
  ],
  selector: 'app-location-page',
  styleUrl: './location-page.css',
  templateUrl: './location-page.html',
})
export class LocationPage {}
