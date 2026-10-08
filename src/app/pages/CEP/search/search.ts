import { Component, DestroyRef, effect, inject, Signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CepMaskDirective } from '../../../directives/cep-mask';
import { CepSearchService } from '../../../facades/data-access/cep-search.service';
import { CEP_SEARCH_REPOSITORY } from '../../../facades/repositories/cep-search.repository';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Address } from '../../../facades/models/address.model';
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
  private readonly cepSearchRepository = inject(CEP_SEARCH_REPOSITORY);
  private readonly destroyRef = inject(DestroyRef);

  public loading: Signal<boolean> = this.cepSearchRepository.loading;
  public addressList: Signal<Address[]> = this.cepSearchRepository.addressList;

  public searchForm = new FormGroup({
    cep: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  public search(): void {
    const cep: string = this.searchForm.controls['cep'].value?.replace('-', '') || '';

    this.cepSearchRepository.search(cep).pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe();
  }
}
