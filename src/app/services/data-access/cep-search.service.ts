import { inject, PLATFORM_ID, Service, Signal, signal, WritableSignal } from '@angular/core';
import { CepSearchRepository } from '../repositories/cep-search.repository';
import { Address, AddressResponse } from '../models/address.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Service()
export class CepSearchService implements CepSearchRepository {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);

  private _loading: WritableSignal<boolean> = signal<boolean>(false);
  public loading: Signal<boolean> = this._loading.asReadonly();

  private _error: WritableSignal<boolean> = signal<boolean>(false);
  public error: Signal<boolean> = this._error.asReadonly();

  private _addressList: WritableSignal<Address[]> = signal<Address[]>([]);
  public addressList: Signal<Address[]> = this._addressList.asReadonly();

  private url: string = 'https://viacep.com.br/ws';

  public search(cep: string): Observable<Address> {
    this._loading.set(true);
    return this.http.get<AddressResponse>(`${this.url}/${cep}/json/`).pipe(
      map(response => this.handleAddressResponse(response)),
      catchError(() => {
        this._loading.set(false);
        this._error.set(true);
        return throwError(() => console.log('Erro inesperado.'));
      })
    );
  }

  public setErrorSignal(active: boolean): void {
    this._error.set(active);
  }

  public removeAddress(id: string): void {
    this._addressList.update(list => list.filter(address => address.id !== id));
    this.addAddress();
  }


  private handleAddressResponse(response: AddressResponse): Address {
    const address: Address = this.setAddressFormat(response);
    if (!response['erro']) {
      this._addressList.update(list => [...list, address]);
      this.addAddress();
    } else {
      this._error.set(true);
    }
    this.getAddressList();
    this._loading.set(false);
    return address;
  }

  private setAddressFormat(address: AddressResponse): Address {
    return {
      id: crypto.randomUUID(),
      cep: address.cep,
      endereco: `${address.logradouro}, ${address.localidade} - ${address.uf}`,
      data: new Date
    }
  }

  private addAddress(): void {
    const value: string = JSON.stringify(this.addressList());
    localStorage.setItem('address', value);
    this.getAddressList();
  }

  public getAddressList(): void {
    this._loading.set(true);
    if (!isPlatformBrowser(this.platformId)) {
      this._loading.set(false);
      return;
    }
    const storage: string = localStorage.getItem('address') ?? ''
    if (storage === '') {
      this._loading.set(false);
      return;
    }
    const values = JSON.parse(storage);
    this._addressList.set(values);
    this._loading.set(false);
  }

}
