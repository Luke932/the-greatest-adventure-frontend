import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GuestRequest } from '../../../services/guests.service';
import { FormsModule } from '@angular/forms';

import {
  GuestsService,
  Guest,
  RsvpStatus
} from '../../../services/guests.service';
import { MenuType } from '../../../../../core/models/menu-type';

@Component({
  selector: 'app-guests-page',
  imports: [
    FormsModule
  ],
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


  showCreateForm = false;

  isCreating = false;

  createErrorMessage = '';

  createSuccessMessage = '';

  newGuest: GuestRequest = {
    name: '',
    surname: '',
    email: null,
    phone: null,
    allergies: null,
    menuType: MenuType.STANDARD,
    rsvpStatus: 'PENDING',
    notes: null
  };

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

  openCreateForm(): void {

    this.createErrorMessage = '';
    this.createSuccessMessage = '';

    this.newGuest = {
      name: '',
      surname: '',
      email: null,
      phone: null,
      allergies: null,
      menuType: MenuType.STANDARD,
      rsvpStatus: 'PENDING',
      notes: null
    };

    this.showCreateForm = true;
  }

  closeCreateForm(): void {

    if (this.isCreating) {
      return;
    }

    this.showCreateForm = false;
    this.createErrorMessage = '';
  }

  createGuest(): void {

    this.createErrorMessage = '';
    this.createSuccessMessage = '';

    if (
      !this.newGuest.name.trim() ||
      !this.newGuest.surname.trim() ||
      !this.newGuest.email?.trim()
    ) {

      this.createErrorMessage =
        'Nome, cognome ed email sono obbligatori.';

      return;
    }

    this.isCreating = true;

    this.guestsService
      .createGuest(this.newGuest)
      .subscribe({

        next: () => {

          this.isCreating = false;

          this.showCreateForm = false;

          this.createSuccessMessage =
            'Invitato aggiunto. L’invito è stato inviato via email.';

          this.loadGuests();

        },

        error: (error) => {

          console.error(
            'ERRORE CREAZIONE INVITATO:',
            error
          );

          this.isCreating = false;

          this.createErrorMessage =
            'Non è stato possibile aggiungere l’invitato.';
          
          this.cdr.detectChanges();

        }

      });
  }

}