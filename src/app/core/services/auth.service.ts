import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

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

  private readonly apiUrlEnv = environment.apiUrl;
  private readonly apiUrl = `${this.apiUrlEnv}/api/public/invites`;
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