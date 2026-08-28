import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuType } from '../../../core/models/menu-type';
import { CompanionRequest } from '../../invite/models/companion-request';

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

@Injectable({
providedIn: 'root'
})
export class CompanionsService {

private readonly http = inject(HttpClient);

private readonly apiUrl =
'http://localhost:8080/api/companions';

getCompanions(): Observable<Companion[]> {


return this.http.get<Companion[]>(
  this.apiUrl
);


}

getCompanionById(
id: number
): Observable<Companion> {


return this.http.get<Companion>(
  `${this.apiUrl}/${id}`
);


}

updateCompanion(
id: number,
companion: CompanionRequest
): Observable<Companion> {

return this.http.put<Companion>(
`${this.apiUrl}/${id}`,
companion
);

}


deleteCompanion(
id: number
): Observable<void> {

return this.http.delete<void>(
  `${this.apiUrl}/${id}`
);

}

createCompanion(
guestId: number,
companion: CompanionRequest
): Observable<Companion> {

return this.http.post<Companion>(
`http://localhost:8080/api/guests/${guestId}/companions`,
companion
);

}


}
