import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/Home/home/home').then(c => c.Home)
  },
  {
    path: 'enderecos',
    loadComponent: () => import('./pages/Cep/cep').then(c => c.Cep)
  },
];
