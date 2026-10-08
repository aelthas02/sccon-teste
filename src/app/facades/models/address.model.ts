export interface AddressResponse {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: number;
  estado: string;
  gia: number;
  ibge: number;
  localidade: string;
  logradouro: string;
  regiao: string;
  siafi: number;
  uf: string;
  unidade: string;
}
export interface AddressResponse {
  erro: string;
}

export interface Address {
  id: string;
  cep: string;
  endereco: string;
  data: Date;
}