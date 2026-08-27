import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [

  // HOME PUBBLICA
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home-page/home-page')
        .then(m => m.HomePage)
  },

  // LOGIN AREA PRIVATA
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login')
        .then(m => m.Login)
  },

  // DASHBOARD AREA PRIVATA
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/pages/dashboard-home/dashboard-home')
        .then(m => m.DashboardHome),

    canActivate: [authGuard]
  },

  // GESTIONE INVITATI
  {
    path: 'dashboard/guests',
    loadComponent: () =>
      import('./features/dashboard/pages/guests/guests-page/guests-page')
        .then(m => m.GuestsPage),

    canActivate: [authGuard]
  },

  {
    path: 'dashboard/guests/:id',
    loadComponent: () =>
      import('./features/dashboard/pages/guests/guests-detail/guests-detail')
        .then(m => m.GuestDetail),

    canActivate: [authGuard]
  },

  {
    path: 'dashboard/guests/:id/modifica',
    loadComponent: () =>
      import('./features/dashboard/pages/guests-edit/guests-edit')
        .then(m => m.GuestsEdit),

    canActivate: [authGuard]
  },
  // INVITO PUBBLICO
  {
    path: 'invito/:token',
    loadComponent: () =>
      import('./features/invite/pages/invite-page/invite-page')
        .then(m => m.InvitePage)
  },

  // PAGINA NON TROVATA
  {
    path: '**',
    redirectTo: ''
  }

];