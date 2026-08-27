import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { InviteService } from '../../../../core/services/invite.service';
import { PublicInviteResponse } from '../../models/public-invite-response';
import { CompanionRequest } from '../../models/companion-request';
import { CompanionForm } from '../../components/companion-form/companion-form';
import { RsvpForm } from '../../components/rsvp-form/rsvp-form';

import { MenuType } from '../../../../core/models/menu-type';

@Component({
  selector: 'app-invite-page',
  standalone: true,
  imports: [
    RsvpForm,
    CompanionForm
  ],
  templateUrl: './invite-page.html',
  styleUrl: './invite-page.css'
})
export class InvitePage implements OnInit {

  private readonly route = inject(ActivatedRoute);
  private readonly inviteService = inject(InviteService);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  invite: PublicInviteResponse | null = null;

  loading = true;
  error = false;

  showCompanionForm = false;
  addingCompanion = false;
  companionError = false;

  readonly menuTypes = Object.values(MenuType);

  ngOnInit(): void {

    const token = this.route.snapshot.paramMap.get('token');

    console.log('TOKEN:', token);

    if (!token) {
      this.loading = false;
      this.error = true;
      return;
    }

    this.inviteService.getInvite(token).subscribe({

      next: (response) => {

        console.log('RISPOSTA GET:', response);

        this.invite = response;
        this.loading = false;

        this.changeDetectorRef.detectChanges();

        console.log('INVITE:', this.invite);
        console.log('LOADING:', this.loading);
      },

      error: (err) => {

        console.error('Errore caricamento invito:', err);

        this.loading = false;
        this.error = true;

        this.changeDetectorRef.detectChanges();
      }
    });
  }

  getToken(): string {
    return this.route.snapshot.paramMap.get('token') ?? '';
  }

  onRsvpUpdated(response: PublicInviteResponse): void {
    this.invite = response;
  }

  openCompanionForm(): void {
    this.companionError = false;
    this.showCompanionForm = true;
  }

  closeCompanionForm(): void {
    this.showCompanionForm = false;
    this.companionError = false;
  }

  addCompanion(request: CompanionRequest): void {

    const token = this.route.snapshot.paramMap.get('token');

    if (!token) {
      this.companionError = true;
      return;
    }

    this.addingCompanion = true;
    this.companionError = false;

    this.inviteService.addCompanion(token, request).subscribe({

      next: (companion) => {

        console.log('ACCOMPAGNATORE AGGIUNTO:', companion);

        if (this.invite) {
          this.invite.companions = [
            ...this.invite.companions,
            companion
          ];
        }

        this.addingCompanion = false;
        this.showCompanionForm = false;

        this.changeDetectorRef.detectChanges();
      },

      error: (err) => {

        console.error(
          'Errore aggiunta accompagnatore:',
          err
        );

        this.addingCompanion = false;
        this.companionError = true;

        this.changeDetectorRef.detectChanges();
      }
    });
  }
}