import {
ChangeDetectorRef,
Component,
OnInit,
inject
} from '@angular/core';

import {
ActivatedRoute,
Router
} from '@angular/router';

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

@Component({
selector: 'app-companions-edit',
imports: [
ReactiveFormsModule
],
templateUrl: './companions-edit.html',
styleUrl: './companions-edit.css'
})
export class CompanionsEdit implements OnInit {

private readonly route =
inject(ActivatedRoute);

private readonly router =
inject(Router);

private readonly fb =
inject(FormBuilder);

private readonly companionsService =
inject(CompanionsService);

private readonly cdr =
inject(ChangeDetectorRef);

companion: Companion | null = null;

isLoading = true;

isSaving = false;

errorMessage = '';

successMessage = '';

readonly menuTypes: MenuType[] = [


MenuType.STANDARD,

MenuType.CELIAC,

MenuType.VEGETARIAN,

MenuType.VEGAN,

MenuType.OTHER


];

readonly menuLabels: Record<MenuType, string> = {


[MenuType.STANDARD]:
  'Standard',

[MenuType.CELIAC]:
  'Celiaco',

[MenuType.VEGETARIAN]:
  'Vegetariano',

[MenuType.VEGAN]:
  'Vegano',

[MenuType.OTHER]:
  'Altro'


};

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


ngOnInit(): void {


const id = Number(
  this.route.snapshot.paramMap.get('id')
);


if (!id) {

  this.errorMessage =
    'Accompagnatore non valido.';

  this.isLoading = false;

  return;

}


this.loadCompanion(id);


}

private loadCompanion(id: number): void {


this.isLoading = true;

this.errorMessage = '';


this.companionsService
  .getCompanionById(id)
  .subscribe({

    next: (response) => {

      console.log(
        'ACCOMPAGNATORE DA MODIFICARE:',
        response
      );


      this.companion = response;


      this.companionForm.patchValue({

        name: response.name,

        surname: response.surname,

        email: response.email ?? '',

        phone: response.phone ?? '',

        allergies: response.allergies ?? '',

        menuType: response.menuType,

        notes: response.notes ?? ''

      });


      this.isLoading = false;

      this.cdr.detectChanges();

    },


    error: (error) => {

      console.error(
        'ERRORE CARICAMENTO ACCOMPAGNATORE:',
        error
      );


      this.isLoading = false;


      if (error.status === 404) {

        this.errorMessage =
          'L\'accompagnatore richiesto non esiste.';

      } else {

        this.errorMessage =
          'Non è stato possibile caricare i dati dell\'accompagnatore.';

      }


      this.cdr.detectChanges();

    }

  });


}

submit(): void {


if (!this.companion) {
  return;
}


this.companionForm.markAllAsTouched();


if (this.companionForm.invalid) {

  this.errorMessage =
    'Controlla i dati inseriti nel modulo.';

  return;

}


this.isSaving = true;

this.errorMessage = '';

this.successMessage = '';


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
  .updateCompanion(
    this.companion.id,
    request
  )
  .subscribe({

    next: (response) => {

      console.log(
        'ACCOMPAGNATORE MODIFICATO:',
        response
      );


      this.isSaving = false;

      this.successMessage =
        'Modifiche salvate correttamente.';


      this.cdr.detectChanges();


      setTimeout(() => {

        if (!this.companion) {
          return;
        }


        this.router.navigate([
          '/dashboard/companions',
          this.companion.id
        ]);

      }, 700);

    },


    error: (error) => {

      console.error(
        'ERRORE MODIFICA ACCOMPAGNATORE:',
        error
      );


      this.isSaving = false;

      this.errorMessage =
        'Non è stato possibile salvare le modifiche.';


      this.cdr.detectChanges();

    }

  });


}

cancel(): void {


if (this.companion) {

  this.router.navigate([
    '/dashboard/companions',
    this.companion.id
  ]);

  return;

}


this.router.navigate([
  '/dashboard/companions'
]);


}

}
