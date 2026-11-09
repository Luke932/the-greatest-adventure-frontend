import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PublicInviteResponse } from '../../features/invite/models/public-invite-response';
import { CompanionRequest } from '../../features/invite/models/companion-request';
import { CompanionResponse } from '../../features/invite/models/companion-response';
import { RsvpStatus } from '../models/rsvp-status';
import { PublicInviteUpdateRequest } from '../../features/invite/models/public-invite-update-request';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  private readonly http = inject(HttpClient);

  private readonly apiUrlEnv = environment.apiUrl;
  private readonly apiUrl = `${this.apiUrlEnv}/api/public/invites`;

  getInvite(token: string): Observable<PublicInviteResponse> {
    return this.http.get<PublicInviteResponse>(
      `${this.apiUrl}/${token}`
    );
  }

updateRsvp(
  token: string,
  rsvpStatus: RsvpStatus
): Observable<PublicInviteResponse> {
  return this.http.patch<PublicInviteResponse>(
    `${this.apiUrl}/${token}/rsvp`,
    {
      rsvpStatus
    }
  );
}

  addCompanion(
    token: string,
    request: CompanionRequest
  ): Observable<CompanionResponse> {
    return this.http.post<CompanionResponse>(
      `${this.apiUrl}/${token}/companions`,
      request
    );
  }

  updateGuest(
    token: string,
    request: PublicInviteUpdateRequest
  ): Observable<PublicInviteResponse> {
    return this.http.patch<PublicInviteResponse>(
      `${this.apiUrl}/${token}`,
      request
    );
  }
  
}