import { Component, DestroyRef, effect, inject, Signal } from '@angular/core';
import { MatError, MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CepMaskDirective } from '../../../../directives/cep-mask.directive';
import { CEP_SEARCH_REPOSITORY } from '../../../../services/repositories/cep-search.repository';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  imports: [
    CommonModule,
    CepMaskDirective,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButton,
    MatError
  ],
  selector: 'app-search',
  styleUrl: './search.component.scss',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  private readonly cepSearchRepository = inject(CEP_SEARCH_REPOSITORY);
  private readonly destroyRef = inject(DestroyRef);

  public loading: Signal<boolean> = this.cepSearchRepository.loading;
  public error: Signal<boolean> = this.cepSearchRepository.error;

  public searchForm = new FormGroup({
    cep: new FormControl('', [Validators.required, Validators.minLength(9)]),
  });

  constructor() {
    effect(() => {
      if (this.error()) {
        this.searchForm.controls['cep'].setErrors({ 'incorrect': true })
      }
    })
  }

  public removeError(): void {
    this.cepSearchRepository.setErrorSignal(false);
  }

  public search(): void {
    const cep: string = this.searchForm.controls['cep'].value?.replace('-', '') || '';

    this.cepSearchRepository.search(cep).pipe(
      takeUntilDestroyed(this.destroyRef),
    ).subscribe();
  }
}
