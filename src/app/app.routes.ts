import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/Home/home/home').then(c => c.Home)
  },
  {
    path: 'enderecos',
    loadComponent: () => import('./pages/CEP/cep/cep').then(c => c.Cep)
  },
];
