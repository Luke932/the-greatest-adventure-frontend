
import {
  Component,
  OnDestroy,
  OnInit,
  signal,
  HostListener
} from '@angular/core';

import { RouterLink } from '@angular/router';
import { Navbar } from '../../../../shared/components/navbar/navbar';
import { Footer } from '../../../../shared/components/footer/footer';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, Navbar, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage implements OnInit, OnDestroy {

  // LETTERA HOGWARTS
  isHogwartsLetterOpen = false;

  openHogwartsLetter(): void {
    this.isHogwartsLetterOpen = true;
  }

  closeHogwartsLetter(): void {
    this.isHogwartsLetterOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeHogwartsLetter();
  }

  // DATA MATRIMONIO
  weddingDate = new Date('2027-06-18T16:00:00');

  // COUNTDOWN
  days = signal<number>(0);
  hours = signal<number>(0);
  minutes = signal<number>(0);
  seconds = signal<number>(0);

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
    const difference = this.weddingDate.getTime() - Date.now();

    if (difference <= 0) {
      this.days.set(0);
      this.hours.set(0);
      this.minutes.set(0);
      this.seconds.set(0);
      return;
    }

    this.days.set(
      Math.floor(difference / 86400000)
    );

    this.hours.set(
      Math.floor((difference / 3600000) % 24)
    );

    this.minutes.set(
      Math.floor((difference / 60000) % 60)
    );

    this.seconds.set(
      Math.floor((difference / 1000) % 60)
    );
  }

  formatNumber(value: number): string {
    return value.toString().padStart(2, '0');
  }
}
