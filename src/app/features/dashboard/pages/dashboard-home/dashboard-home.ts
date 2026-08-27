import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';
import {
  StatsService,
  StatsResponse
} from '../../../../core/services/stats';

@Component({
  selector: 'app-dashboard-home',
  imports: [],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.css'
})
export class DashboardHome implements OnInit {

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly statsService = inject(StatsService);
  private readonly cdr = inject(ChangeDetectorRef);

  stats: StatsResponse | null = null;

  isLoading = true;

  errorMessage = '';


  ngOnInit(): void {

    this.loadStats();

  }


  private loadStats(): void {

    this.isLoading = true;

    this.errorMessage = '';

    this.statsService.getStats().subscribe({

      next: (response) => {

        console.log('STATISTICHE RICEVUTE:', response);

        this.stats = response;

        this.isLoading = false;

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error('ERRORE STATISTICHE:', error);

        this.isLoading = false;

        this.errorMessage =
          'Non è stato possibile caricare le statistiche.';

        this.cdr.detectChanges();

      }

    });

  }

  openGuests(): void {

    this.router.navigate([
      '/dashboard/guests'
    ]);

  }

  logout(): void {

    this.authService.logout();

    this.router.navigate(['/login']);

  }

}