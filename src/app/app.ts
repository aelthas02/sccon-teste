import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';

@Component({
  imports: [RouterOutlet, Header, MatCardModule, MatCardHeader, MatCardContent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('sccon-teste');
}
