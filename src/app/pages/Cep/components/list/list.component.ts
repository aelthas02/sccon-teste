import { Component, inject, Signal } from '@angular/core';
import { CEP_SEARCH_REPOSITORY } from '../../../../facades/repositories/cep-search.repository';
import { Address } from '../../../../facades/models/address.model';
import { MatTableModule } from '@angular/material/table';
import { CommonModule, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [
    CommonModule,
    DatePipe,
    MatTableModule,
    MatButtonModule
  ],
  selector: 'app-list',
  styleUrl: './list.component.scss',
  templateUrl: './list.component.html',
})
export class ListComponent {
  private readonly cepSearchRepository = inject(CEP_SEARCH_REPOSITORY);

  public addressList: Signal<Address[]> = this.cepSearchRepository.addressList;

  public displayedColumns: string[] = ['cep', 'endereco', 'data', 'id'];

  constructor() {
    this.cepSearchRepository.getAddressList();
  }

  public removeAddress(id: string): void {
    this.cepSearchRepository.removeAddress(id);
  }
}
