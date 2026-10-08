import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CepMaskDirective } from '../../../directives/cep-mask';
@Component({
  imports: [
    CommonModule,
    CepMaskDirective,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButton
  ],
  selector: 'app-search',
  styleUrl: './search.scss',
  templateUrl: './search.html',
})
export class Search {

  public searchForm = new FormGroup({
    cep: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  public search(): void {
    console.log(this.searchForm.controls['cep'].value)
  }
}
