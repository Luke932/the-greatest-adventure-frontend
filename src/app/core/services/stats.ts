import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';


export interface StatsResponse {

  totalGuests: number;

  confirmedGuests: number;

  pendingGuests: number;

  declinedGuests: number;

  totalCompanions: number;

  confirmedPeople: number;

  pendingPeople: number;

  declinedPeople: number;

  standardPeople: number;

  celiacPeople: number;

  vegetarianPeople: number;

  veganPeople: number;

  otherMenuPeople: number;
}


@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private readonly http = inject(HttpClient);
  private readonly apiUrlEnv = environment.apiUrl;
  private readonly apiUrl = `${this.apiUrlEnv}/api`;

  exportGuestsExcel(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/guests/export`, {
      responseType: 'blob'
    });
  }

  getStats(): Observable<StatsResponse> {

    return this.http.get<StatsResponse>(
      `${this.apiUrl}/stats`
    );

  }

}