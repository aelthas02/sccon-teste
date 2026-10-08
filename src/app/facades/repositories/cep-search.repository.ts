import { Observable } from "rxjs";
import { Address } from "../models/address.model";
import { InjectionToken, Signal } from "@angular/core";

export interface CepSearchRepository {
  loading: Signal<boolean>;
  error: Signal<boolean>;
  addressList: Signal<Address[]>;
  search(cep: string): Observable<Address>;
  removeAddress(cep: string): void;
  setErrorSignal(active: boolean): void;
  getAddressList(): void;
}

export const CEP_SEARCH_REPOSITORY = new InjectionToken<CepSearchRepository>('CEP_SEARCH_REPOSITORY');