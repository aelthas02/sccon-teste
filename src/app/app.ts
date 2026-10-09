import { Component, inject, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { CEP_SEARCH_REPOSITORY } from './facades/repositories/cep-search.repository';
import { CepSearchService } from './facades/data-access/cep-search.service';
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
  imports: [
    RouterOutlet,
    HeaderComponent,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
    SpinnerComponent
  ],
  providers: [{
    provide: CEP_SEARCH_REPOSITORY,
    useClass: CepSearchService
  }],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly cepSearchRepository = inject(CEP_SEARCH_REPOSITORY);

  public loading: Signal<boolean> = this.cepSearchRepository.loading
}
