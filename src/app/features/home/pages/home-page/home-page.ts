import {
  Component,
  OnDestroy,
  OnInit,
  signal
} from '@angular/core';

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
export class HomePage implements OnInit, OnDestroy {

  weddingDate =
    new Date('2027-06-18T16:00:00');

  days = signal(0);
  hours = signal(0);
  minutes = signal(0);
  seconds = signal(0);

  private countdownInterval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.updateCountdown();

    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  private updateCountdown(): void {
    const now = Date.now();

    const target =
      this.weddingDate.getTime();

    const difference =
      target - now;

    if (difference <= 0) {
      this.days.set(0);
      this.hours.set(0);
      this.minutes.set(0);
      this.seconds.set(0);

      return;
    }

    this.days.set(
      Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
      )
    );

    this.hours.set(
      Math.floor(
        (
          difference /
          (1000 * 60 * 60)
        ) % 24
      )
    );

    this.minutes.set(
      Math.floor(
        (
          difference /
          (1000 * 60)
        ) % 60
      )
    );

    this.seconds.set(
      Math.floor(
        (
          difference /
          1000
        ) % 60
      )
    );
  }

  formatNumber(value: number): string {
    return value
      .toString()
      .padStart(2, '0');
  }
}