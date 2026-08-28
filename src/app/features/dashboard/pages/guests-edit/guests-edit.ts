import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  GuestsService,
  GuestDetails,
  GuestRequest,
  RsvpStatus,
} from '../../services/guests.service';

import { MenuType } from '../../../../core/models/menu-type';


@Component({
  selector: 'app-guests-edit',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './guests-edit.html',
  styleUrl: './guests-edit.css'
})
export class GuestsEdit implements OnInit {

  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly guestsService = inject(GuestsService);
  private readonly cdr = inject(ChangeDetectorRef);


  guest: GuestDetails | null = null;

  isLoading = true;

  isSaving = false;

  errorMessage = '';

  successMessage = '';


  readonly rsvpStatuses: RsvpStatus[] = [
    'PENDING',
    'CONFIRMED',
    'DECLINED'
  ];


  readonly menuTypes: MenuType[] = [
    MenuType.STANDARD,
    MenuType.CELIAC,
    MenuType.VEGETARIAN,
    MenuType.VEGAN,
    MenuType.OTHER
  ];



  readonly rsvpLabels: Record<RsvpStatus, string> = {
    PENDING: 'In attesa',
    CONFIRMED: 'Confermato',
    DECLINED: 'Non partecipa'
  };


  readonly menuLabels: Record<MenuType, string> = {
    STANDARD: 'Menu standard',
    VEGETARIAN: 'Menu vegetariano',
    VEGAN: 'Menu vegano',
    CELIAC: 'Menu senza glutine',
    OTHER: 'Altro tio di menu'
  };


  guestForm = this.fb.nonNullable.group({

    name: [
      '',
      [
        Validators.required
      ]
    ],

    surname: [
      '',
      [
        Validators.required
      ]
    ],

    email: [
      '',
      [
        Validators.email
      ]
    ],

    phone: [
      ''
    ],

    allergies: [
      ''
    ],

    menuType: [
      'STANDARD' as MenuType,
      [
        Validators.required
      ]
    ],

    rsvpStatus: [
      'PENDING' as RsvpStatus,
      [
        Validators.required
      ]
    ],

    notes: [
      ''
    ]

  });


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

    this.guestsService
      .getGuestById(id)
      .subscribe({

        next: (guest) => {

          console.log(
            'INVITATO DA MODIFICARE:',
            guest
          );

          this.guest = guest;

          this.guestForm.patchValue({

            name: guest.name,

            surname: guest.surname,

            email: guest.email ?? '',

            phone: guest.phone ?? '',

            allergies: guest.allergies ?? '',

            menuType: guest.menuType,

            rsvpStatus: guest.rsvpStatus,

            notes: guest.notes ?? ''

          });

          this.isLoading = false;

          this.cdr.detectChanges();

        },

        error: (error) => {

          console.error(
            'ERRORE CARICAMENTO INVITATO:',
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


  submit(): void {

    if (!this.guest) {
      return;
    }

    if (this.guestForm.invalid) {

      this.guestForm.markAllAsTouched();

      return;

    }

    this.isSaving = true;

    this.errorMessage = '';

    this.successMessage = '';


    const formValue = this.guestForm.getRawValue();


    const request: GuestRequest = {

      name: formValue.name.trim(),

      surname: formValue.surname.trim(),

      email: formValue.email.trim()
        ? formValue.email.trim()
        : null,

      phone: formValue.phone.trim()
        ? formValue.phone.trim()
        : null,

      allergies: formValue.allergies.trim()
        ? formValue.allergies.trim()
        : null,

      menuType: formValue.menuType,

      rsvpStatus: formValue.rsvpStatus,

      notes: formValue.notes.trim()
        ? formValue.notes.trim()
        : null

    };


    this.guestsService
      .updateGuest(
        this.guest.id,
        request
      )
      .subscribe({

        next: (updatedGuest) => {

          console.log(
            'INVITATO MODIFICATO:',
            updatedGuest
          );

          this.isSaving = false;

          this.successMessage =
            'Invitato aggiornato correttamente.';

          this.cdr.detectChanges();

          setTimeout(() => {

            this.router.navigate([
              '/dashboard/guests',
              this.guest!.id
            ]);

          }, 600);

        },

        error: (error) => {

          console.error(
            'ERRORE MODIFICA INVITATO:',
            error
          );

          this.isSaving = false;

          if (error.status === 400) {

            this.errorMessage =
              'I dati inseriti non sono validi.';

          } else if (error.status === 404) {

            this.errorMessage =
              'L\'invitato non esiste più.';

          } else {

            this.errorMessage =
              'Non è stato possibile modificare l\'invitato.';

          }

          this.cdr.detectChanges();

        }

      });

  }


  cancel(): void {

    if (!this.guest) {

      this.router.navigate([
        '/dashboard/guests'
      ]);

      return;

    }

    this.router.navigate([
      '/dashboard/guests',
      this.guest.id
    ]);

  }

}