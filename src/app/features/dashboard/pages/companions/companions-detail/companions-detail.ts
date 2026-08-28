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
Companion,
CompanionsService
} from '../../../services/companions.service';

@Component({
selector: 'app-companions-detail',
imports: [],
templateUrl: './companions-detail.html',
styleUrl: './companions-detail.css'
})
export class CompanionDetail implements OnInit {

private readonly route =
inject(ActivatedRoute);

private readonly router =
inject(Router);

private readonly companionsService =
inject(CompanionsService);

private readonly cdr =
inject(ChangeDetectorRef);

companion: Companion | null = null;

isLoading = true;

errorMessage = '';

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
        'DETTAGLIO ACCOMPAGNATORE:',
        response
      );

      this.companion = response;

      this.isLoading = false;

      this.cdr.detectChanges();

    },


    error: (error) => {

      console.error(
        'ERRORE DETTAGLIO ACCOMPAGNATORE:',
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

backToCompanions(): void {


this.router.navigate([
  '/dashboard/companions'
]);


}

editCompanion(): void {


if (!this.companion) {
  return;
}

this.router.navigate([
  '/dashboard/companions',
  this.companion.id,
  'modifica'
]);


}

deleteCompanion(): void {


if (!this.companion) {
  return;
}


const confirmed = window.confirm(
  `Vuoi eliminare ${this.companion.name} ${this.companion.surname}?`
);


if (!confirmed) {
  return;
}


this.companionsService
  .deleteCompanion(this.companion.id)
  .subscribe({

    next: () => {

      this.router.navigate([
        '/dashboard/companions'
      ]);

    },


    error: (error) => {

      console.error(
        'ERRORE ELIMINAZIONE ACCOMPAGNATORE:',
        error
      );

      this.errorMessage =
        'Non è stato possibile eliminare l\'accompagnatore.';

      this.cdr.detectChanges();

    }

  });


}

}
