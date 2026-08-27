import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  GuestsService,
  GuestDetails
} from '../../../services/guests.service';

@Component({
  imports: [],
  selector: 'app-guests-detail',
  styleUrl: './guests-detail.css',
  templateUrl: './guests-detail.html',
})
export class GuestDetail implements OnInit {

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly guestsService = inject(GuestsService);
  private readonly cdr = inject(ChangeDetectorRef);

  guest: GuestDetails | null = null;

  isLoading = true;

  errorMessage = '';


  ngOnInit(): void {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    if (!id) {

      this.errorMessage =
        'Invitato non valido.';

      this.isLoading = false;

      return;

    }

    this.loadGuest(id);

  }


  private loadGuest(id: number): void {

    this.isLoading = true;

    this.errorMessage = '';

    this.guestsService.getGuestById(id).subscribe({

      next: (response) => {

        console.log(
          'DETTAGLIO INVITATO:',
          response
        );

        this.guest = response;

        this.isLoading = false;

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error(
          'ERRORE DETTAGLIO INVITATO:',
          error
        );

        this.isLoading = false;

        if (error.status === 404) {

          this.errorMessage =
            'L\'invitato richiesto non esiste.';

        } else {

          this.errorMessage =
            'Non è stato possibile caricare i dati dell\'invitato.';

        }

        this.cdr.detectChanges();

      }

    });

  }


  backToGuests(): void {

    this.router.navigate([
      '/dashboard/guests'
    ]);

  }


  editGuest(): void {
    if (!this.guest) {
    return;
    }

    this.router.navigate([
    '/dashboard/guests',
    this.guest.id,
    'modifica'
    ]);
  }


  deleteGuest(): void {

    if (!this.guest) {
      return;
    }

    const confirmed = window.confirm(
      `Vuoi eliminare ${this.guest.name} ${this.guest.surname}?`
    );

    if (!confirmed) {
      return;
    }

    this.guestsService
      .deleteGuest(this.guest.id)
      .subscribe({

        next: () => {

          this.router.navigate([
            '/dashboard/guests'
          ]);

        },

        error: (error) => {

          console.error(
            'ERRORE ELIMINAZIONE INVITATO:',
            error
          );

          this.errorMessage =
            'Non è stato possibile eliminare l\'invitato.';

          this.cdr.detectChanges();

        }

      });

  }

}