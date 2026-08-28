import {
ChangeDetectorRef,
Component,
OnInit,
inject
} from '@angular/core';

import { Router } from '@angular/router';

import {
Companion,
CompanionsService
} from '../../../services/companions.service';

@Component({
selector: 'app-companions-page',
imports: [],
templateUrl: './companions-page.html',
styleUrl: './companions-page.css'
})
export class CompanionsPage implements OnInit {

private readonly router = inject(Router);

private readonly companionsService =
inject(CompanionsService);

private readonly cdr =
inject(ChangeDetectorRef);

companions: Companion[] = [];

isLoading = true;

errorMessage = '';

ngOnInit(): void {


this.loadCompanions();


}

openCompanion(id: number): void {

this.router.navigate([
'/dashboard/companions',
id
]);

}



private loadCompanions(): void {


this.isLoading = true;

this.errorMessage = '';


this.companionsService
  .getCompanions()
  .subscribe({

    next: (response) => {

      console.log(
        'ACCOMPAGNATORI RICEVUTI:',
        response
      );

      this.companions = response;

      this.isLoading = false;

      this.cdr.detectChanges();

    },


    error: (error) => {

      console.error(
        'ERRORE ACCOMPAGNATORI:',
        error
      );

      this.isLoading = false;

      this.errorMessage =
        'Non è stato possibile caricare gli accompagnatori.';

      this.cdr.detectChanges();

    }

  });


}

backToDashboard(): void {


this.router.navigate([
  '/dashboard'
]);


}

}
