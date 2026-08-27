import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  loginForm = this.fb.nonNullable.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],

    password: ['', [
      Validators.required
    ]]
  });

  errorMessage = '';
  isLoading = false;


  submit(): void {

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      return;
    }

    this.errorMessage = '';
    this.isLoading = true;

    const credentials = this.loginForm.getRawValue();

    this.authService.login(credentials).subscribe({

      next: () => {

        this.isLoading = false;

        this.router.navigate(['/dashboard']);

      },

      error: () => {

        this.isLoading = false;

        this.errorMessage =
          'Email o password non corretti.';

      }

    });
  }
}