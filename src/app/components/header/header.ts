import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Routes } from '../../routes.enum';
import { filter } from 'rxjs';

@Component({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  private readonly router = inject(Router);

  public showMenu: boolean = false;


  public toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  public goHome(): void {
    this.router.navigate([Routes.HOME]);
    if (this.showMenu) {
      this.toggleMenu();
    }
  }

  public goSearch(): void {
    this.router.navigate([Routes.SEARCH]);
    if (this.showMenu) {
      this.toggleMenu();
    }
  }
}
