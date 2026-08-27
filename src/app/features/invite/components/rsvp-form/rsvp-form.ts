import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { InviteService } from '../../../../core/services/invite.service';
import { RsvpStatus } from '../../../../core/models/rsvp-status';
import { PublicInviteResponse } from '../../models/public-invite-response';

@Component({
  selector: 'app-rsvp-form',
  standalone: true,
  templateUrl: './rsvp-form.html',
  styleUrl: './rsvp-form.css'
})
export class RsvpForm {

  @Input({ required: true })
  token!: string;

  @Input({ required: true })
  currentStatus!: RsvpStatus;

  @Output()
  rsvpUpdated = new EventEmitter<PublicInviteResponse>();

  private readonly inviteService = inject(InviteService);

  readonly RsvpStatus = RsvpStatus;

  loading = false;
  error = false;

  updateRsvp(status: RsvpStatus): void {

    if (this.loading) {
      return;
    }

    this.loading = true;
    this.error = false;

    this.inviteService.updateRsvp(
      this.token,
      status
    ).subscribe({

      next: (response) => {
        this.loading = false;
        this.rsvpUpdated.emit(response);
      },

      error: (err) => {
        console.error('Errore aggiornamento RSVP:', err);

        this.loading = false;
        this.error = true;
      }
    });
  }
}