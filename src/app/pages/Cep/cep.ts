import { Component } from '@angular/core';
import { List } from './components/list/list';
import { Search } from './components/search/search';
import { MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';

@Component({
  imports: [
    List,
    Search,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
  ],
  selector: 'app-cep',
  styleUrl: './cep.scss',
  templateUrl: './cep.html',
})
export class Cep { }
