import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/Home/home-module').then(m => m.HomeModule)
  },
  {
    path: 'enderecos',
    loadChildren: () => import('./pages/Cep/cep-module').then(m => m.CepModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
