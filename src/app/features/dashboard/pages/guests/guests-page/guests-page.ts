import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import {
  GuestsService,
  Guest,
  RsvpStatus
} from '../../../services/guests.service';

@Component({
  selector: 'app-guests-page',
  imports: [],
  templateUrl: './guests-page.html',
  styleUrl: './guests-page.css'
})
export class GuestsPage implements OnInit {

  private readonly guestsService = inject(GuestsService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);

  guests: Guest[] = [];

  filteredGuests: Guest[] = [];

  selectedStatus: RsvpStatus | 'ALL' = 'ALL';

  searchTerm = '';

  isLoading = true;

  errorMessage = '';


  ngOnInit(): void {

    this.loadGuests();

  }


  private loadGuests(): void {

    this.isLoading = true;

    this.errorMessage = '';

    this.guestsService.getGuests().subscribe({

      next: (response) => {

        console.log('INVITATI RICEVUTI:', response);

        this.guests = response;

        this.applyFilters();

        this.isLoading = false;

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error('ERRORE INVITATI:', error);

        this.isLoading = false;

        this.errorMessage =
          'Non è stato possibile caricare gli invitati.';

        this.cdr.detectChanges();

      }

    });

  }


  setStatusFilter(
    status: RsvpStatus | 'ALL'
  ): void {

    this.selectedStatus = status;

    this.applyFilters();

  }


  onSearch(
    event: Event
  ): void {

    const input = event.target as HTMLInputElement;

    this.searchTerm = input.value;

    this.applyFilters();

  }


  private applyFilters(): void {

    const search = this.searchTerm
      .trim()
      .toLowerCase();


    this.filteredGuests = this.guests.filter(
      guest => {

        const matchesStatus =
          this.selectedStatus === 'ALL' ||
          guest.rsvpStatus === this.selectedStatus;


        const fullName =
          `${guest.name} ${guest.surname}`
            .toLowerCase();


        const matchesSearch =
          !search ||
          fullName.includes(search) ||
          guest.email?.toLowerCase().includes(search) ||
          guest.phone?.toLowerCase().includes(search);


        return matchesStatus && matchesSearch;

      }
    );

  }


  openGuest(
    id: number
  ): void {

    this.router.navigate([
      '/dashboard/guests',
      id
    ]);

  }


  backToDashboard(): void {

    this.router.navigate([
      '/dashboard'
    ]);

  }

}