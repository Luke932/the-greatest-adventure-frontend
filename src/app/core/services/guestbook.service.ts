import { environment } from '../../../environments/environment.prod';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GuestbookMessage {
  id: number;
  authorName: string;
  message: string;
  createdAt: string;
}

export interface GuestbookMessageRequest {
  authorName: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {

  private http = inject(HttpClient);

  private readonly apiUrlEnv = environment.apiUrl;
  private readonly apiUrl = `${this.apiUrlEnv}/api/guestbook`;

  // Recupera i messaggi approvati
  getApprovedMessages(): Observable<GuestbookMessage[]> {
    return this.http.get<GuestbookMessage[]>(this.apiUrl);
  }

  // Invia un nuovo messaggio
  createMessage(
    request: GuestbookMessageRequest
  ): Observable<GuestbookMessage> {
    return this.http.post<GuestbookMessage>(
      this.apiUrl,
      request
    );
  }

}
