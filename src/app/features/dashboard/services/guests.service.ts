import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuType } from '../../../core/models/menu-type';

export type RsvpStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'DECLINED';

export interface Guest {

  id: number;

  name: string;

  surname: string;

  email: string | null;

  phone: string | null;

  allergies: string | null;

  menuType: MenuType;

  rsvpStatus: RsvpStatus;

  notes: string | null;

}

export interface GuestDetails extends Guest {

  companions: Companion[];

}

export interface Companion {

  id: number;

  name: string;

  surname: string;

  email: string | null;

  phone: string | null;

  allergies: string | null;

  menuType: MenuType;

  notes: string | null;

}

export interface GuestRequest {

  name: string;

  surname: string;

  email: string | null;

  phone: string | null;

  allergies: string | null;

  menuType: MenuType;

  rsvpStatus: RsvpStatus;

  notes: string | null;

}


@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/api/guests';


  /**
   * Recupera tutti gli invitati.
   */
  getGuests(): Observable<Guest[]> {

    return this.http.get<Guest[]>(
      this.apiUrl
    );

  }

  /**
   * Recupera un invitato tramite ID.
   */
  getGuestById(
    id: number
  ): Observable<GuestDetails> {

    return this.getGuest(id);

  }

  /**
   * Recupera gli accompagnatori di un invitato.
   */
  getCompanions(
    guestId: number
  ): Observable<Companion[]> {

    return this.http.get<Companion[]>(
      `${this.apiUrl}/${guestId}/companions`
    );

  }


  /**
   * Recupera gli invitati filtrati per stato RSVP.
   */
  getGuestsByStatus(
    status: RsvpStatus
  ): Observable<Guest[]> {

    const params = new HttpParams()
      .set('status', status);

    return this.http.get<Guest[]>(
      this.apiUrl,
      { params }
    );

  }


  /**
   * Recupera il dettaglio di un invitato.
   */
  getGuest(
    id: number
  ): Observable<GuestDetails> {

    return this.http.get<GuestDetails>(
      `${this.apiUrl}/${id}`
    );

  }


  /**
   * Modifica un invitato.
   */
  updateGuest(
    id: number,
    guest: GuestRequest
  ): Observable<Guest> {

    return this.http.put<Guest>(
      `${this.apiUrl}/${id}`,
      guest
    );

  }


  /**
   * Elimina un invitato.
   */
  deleteGuest(
    id: number
  ): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );

  }

  createGuest(
    guest: GuestRequest
  ): Observable<Guest> {

    return this.http.post<Guest>(
      this.apiUrl,
      guest
    );

  }

}