import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
FormBuilder,
ReactiveFormsModule,
Validators
} from '@angular/forms';

import {
Companion,
CompanionsService
} from '../../../services/companions.service';

import { MenuType } from '../../../../../core/models/menu-type';
import { CompanionRequest } from '../../../../invite/models/companion-request';


import {
  GuestsService,
  GuestDetails
} from '../../../services/guests.service';

@Component({
  imports: [
    ReactiveFormsModule
  ],
  selector: 'app-guests-detail',
  styleUrl: './guests-detail.css',
  templateUrl: './guests-detail.html',
})
export class GuestDetail implements OnInit {

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly guestsService = inject(GuestsService);
  private readonly companionsService =inject(CompanionsService);
  private readonly fb =inject(FormBuilder);
  private readonly cdr = inject(ChangeDetectorRef);

  guest: GuestDetails | null = null;

  isLoading = true;

  errorMessage = '';

  isSavingCompanion = false;

  showCompanionForm = false;

  companionErrorMessage = '';

  companionSuccessMessage = '';

  isSendingInvitation = false;

  invitationSuccessMessage = '';

  invitationErrorMessage = '';

  isCopyingInviteLink = false;

  inviteLinkSuccessMessage = '';

  inviteLinkErrorMessage = '';

  readonly menuTypes: MenuType[] = [

  MenuType.STANDARD,
  MenuType.CELIAC,
  MenuType.VEGETARIAN,
  MenuType.VEGAN,
  MenuType.OTHER

  ];

  readonly menuLabels: Record<MenuType, string> = {

  [MenuType.STANDARD]: 'Standard',
  [MenuType.CELIAC]: 'Celiaco',
  [MenuType.VEGETARIAN]: 'Vegetariano',
  [MenuType.VEGAN]: 'Vegano',
  [MenuType.OTHER]: 'Altro'

  };


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

  readonly companionForm =
  this.fb.nonNullable.group({


  name: [
    '',
    Validators.required
  ],

  surname: [
    '',
    Validators.required
  ],

  email: [
    '',
    Validators.email
  ],

  phone: [
    ''
  ],

  allergies: [
    ''
  ],

  menuType: [
    MenuType.STANDARD
  ],

  notes: [
    ''
  ]


  });

  toggleCompanionForm(): void {

  this.showCompanionForm =
  !this.showCompanionForm;

  this.companionErrorMessage = '';
  this.companionSuccessMessage = '';

  if (!this.showCompanionForm) {


  this.companionForm.reset({

    name: '',
    surname: '',
    email: '',
    phone: '',
    allergies: '',
    menuType: MenuType.STANDARD,
    notes: ''

  });


  }

  this.cdr.detectChanges();

  }

  openCompanion(companion: Companion): void {

  this.router.navigate([
  '/dashboard/companions',
  companion.id
  ]);

  }

  deleteCompanion(companion: Companion): void {

    const confirmed = window.confirm(
      `Vuoi eliminare ${companion.name} ${companion.surname}?`
    );

    if (!confirmed) {
      return;
    }

    this.companionErrorMessage = '';
    this.companionSuccessMessage = '';

    this.companionsService
      .deleteCompanion(companion.id)
      .subscribe({

        next: () => {

          console.log(
            'ACCOMPAGNATORE ELIMINATO:',
            companion
          );

          if (this.guest) {

            this.guest.companions =
              this.guest.companions.filter(
                item => item.id !== companion.id
              );

          }

          this.companionSuccessMessage =
            'Accompagnatore eliminato correttamente.';

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'ERRORE ELIMINAZIONE ACCOMPAGNATORE:',
            error
          );

          this.companionErrorMessage =
            'Non è stato possibile eliminare l\'accompagnatore.';

          this.cdr.detectChanges();

        }

      });

  }

  addCompanion(): void {

  if (!this.guest) {
  return;
  }

  this.companionForm.markAllAsTouched();

  if (this.companionForm.invalid) {


  this.companionErrorMessage =
    'Controlla i dati inseriti nel modulo.';

  return;


  }

  this.isSavingCompanion = true;

  this.companionErrorMessage = '';
  this.companionSuccessMessage = '';

  const formValue =
  this.companionForm.getRawValue();

  const request: CompanionRequest = {


  name:
    formValue.name.trim(),

  surname:
    formValue.surname.trim(),

  email:
    formValue.email.trim() || undefined,

  phone:
    formValue.phone.trim() || undefined,

  allergies:
    formValue.allergies.trim() || undefined,

  menuType:
    formValue.menuType,

  notes:
    formValue.notes.trim() || undefined


  };

  this.companionsService
  .createCompanion(
  this.guest.id,
  request
  )
  .subscribe({


    next: (response) => {

      console.log(
        'ACCOMPAGNATORE CREATO:',
        response
      );

      this.isSavingCompanion = false;

      this.companionSuccessMessage =
        'Accompagnatore aggiunto correttamente.';

      this.companionForm.reset({

        name: '',
        surname: '',
        email: '',
        phone: '',
        allergies: '',
        menuType: MenuType.STANDARD,
        notes: ''

      });

      this.showCompanionForm = false;

      // Ricarichiamo il dettaglio dell'invitato
      // così vediamo subito il nuovo accompagnatore.

      this.loadGuest(this.guest!.id);

    },

    error: (error) => {

      console.error(
        'ERRORE CREAZIONE ACCOMPAGNATORE:',
        error
      );

      this.isSavingCompanion = false;

      this.companionErrorMessage =
        'Non è stato possibile aggiungere l\'accompagnatore.';

      this.cdr.detectChanges();

    }

  });


  }

  sendInvitation(): void {

    if (!this.guest) {
      return;
    }

    if (!this.guest.email) {

      this.invitationErrorMessage =
        'Questo invitato non ha un indirizzo email.';

      this.invitationSuccessMessage = '';

      return;
    }

    if (this.isSendingInvitation) {
      return;
    }

    this.isSendingInvitation = true;

    this.invitationSuccessMessage = '';
    this.invitationErrorMessage = '';

    this.guestsService
      .sendInvitation(this.guest.id)
      .subscribe({

        next: () => {

          console.log(
            'INVITO REINVIATO:',
            this.guest
          );

          this.isSendingInvitation = false;

          this.invitationSuccessMessage =
            `L'invito è stato inviato nuovamente a ${this.guest?.email}.`;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'ERRORE REINVIO INVITO:',
            error
          );

          this.isSendingInvitation = false;

          this.invitationErrorMessage =
            'Non è stato possibile reinviare l\'invito.';

          this.cdr.detectChanges();

        }

      });

  }

  copyInvitationLink(): void {

    if (!this.guest?.inviteUrl) {
      this.inviteLinkErrorMessage =
        'Il link di invito non è disponibile.';

      this.inviteLinkSuccessMessage = '';

      return;
    }

    if (this.isCopyingInviteLink) {
      return;
    }

    this.isCopyingInviteLink = true;

    this.inviteLinkSuccessMessage = '';
    this.inviteLinkErrorMessage = '';

    navigator.clipboard.writeText(this.guest.inviteUrl)
      .then(() => {

        this.inviteLinkSuccessMessage =
          'Link copiato negli appunti.';

        this.isCopyingInviteLink = false;

        this.cdr.detectChanges();

        setTimeout(() => {

          this.inviteLinkSuccessMessage = '';

          this.cdr.detectChanges();

        }, 2500);

      })
      .catch((error) => {

        console.error(
          'ERRORE COPIA LINK INVITO:',
          error
        );

        this.isCopyingInviteLink = false;

        this.inviteLinkErrorMessage =
          'Non è stato possibile copiare il link.';

        this.cdr.detectChanges();

      });

  }

}