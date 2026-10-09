import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { cepRoutes } from './cep.routes';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(cepRoutes)
  ],
  exports: [RouterModule]
})
export class CepModule { }
