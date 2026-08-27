import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/api';
  private readonly tokenKey = 'wedding_admin_token';


  login(credentials: LoginRequest): Observable<LoginResponse> {

    return this.http
      .post<LoginResponse>(
        `${this.apiUrl}/auth/login`,
        credentials
      )
      .pipe(
        tap(response => {

          localStorage.setItem(
            this.tokenKey,
            response.token
          );

        })
      );
  }


  getToken(): string | null {

    return localStorage.getItem(this.tokenKey);
  }


  isAuthenticated(): boolean {

    return !!this.getToken();
  }


  logout(): void {

    localStorage.removeItem(this.tokenKey);
  }

}