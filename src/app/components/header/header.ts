import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Routes } from '../../routes.enum';

@Component({
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  private readonly route = inject(Router);

  public goHome(): void {
    this.route.navigate([Routes.HOME]);
  }

  public goSearch(): void {
    this.route.navigate([Routes.SEARCH]);
  }
}
