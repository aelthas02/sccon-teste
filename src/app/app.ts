import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';
import { CEP_SEARCH_REPOSITORY } from './facades/repositories/cep-search.repository';
import { CepSearchService } from './facades/data-access/cep-search.service';

@Component({
  imports: [
    RouterOutlet,
    Header,
    MatCardModule,
    MatCardHeader,
    MatCardContent
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
  protected readonly title = signal('sccon-teste');
}
