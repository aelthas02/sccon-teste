import { inject, Service, Signal, signal, WritableSignal } from '@angular/core';
import { CepSearchRepository } from '../repositories/cep-search.repository';
import { Address, AddressResponse } from '../models/address.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { randomUUID } from 'crypto';

@Service()
export class CepSearchService implements CepSearchRepository {
  private readonly http = inject(HttpClient);

  public _loading: WritableSignal<boolean> = signal<boolean>(false);
  public loading: Signal<boolean> = this._loading.asReadonly();

  private _addressList: WritableSignal<Address[]> = signal<Address[]>([]);
  public addressList: Signal<Address[]> = this._addressList.asReadonly();

  private url: string = 'https://viacep.com.br/ws';

  public search(cep: string): Observable<Address> {
    this._loading.set(true);
    return this.http.get<AddressResponse>(`${this.url}/${cep}/json/`).pipe(
      map(response => {
        const address: Address = this.setAddressFormat(response);
        this._addressList.update(list => [...list, address]);
        this._loading.set(false);
        return address;
      }),
      catchError(() => {
        this._loading.set(false);
        return throwError(() => console.log('Erro inesperado.'));
      })
    );
  }

  public removeAddress(id: string): void {
    this._addressList.update(list => list.filter(address => address.id !== id));
  }


  private setAddressFormat(address: AddressResponse): Address {
    return {
      id: crypto.randomUUID(),
      cep: address.cep,
      endereco: `${address.logradouro}, ${address.localidade} - ${address.uf}`,
      data: new Date
    }
  }

}
