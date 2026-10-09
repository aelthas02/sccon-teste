import { Component } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';

@Component({
  imports: [
    ListComponent,
    SearchComponent,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
  ],
  selector: 'app-cep',
  styleUrl: './cep.component.scss',
  templateUrl: './cep.component.html',
})
export class CepComponent { }
