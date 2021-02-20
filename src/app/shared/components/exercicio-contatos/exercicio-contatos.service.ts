import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Contato } from './exercicio-contatos.interface';

@Injectable({
  providedIn: 'root'
})
export class ExercicioContatosService {

  API_URL = environment.API_URL;

  httpOptions = {
    headers: new HttpHeaders({
      Autorization: 'TOKEN'
    })
  }

  constructor(private http: HttpClient) { }

  getContatos() {
    return this.http.get<Contato[]>(`${this.API_URL}/contatos`);
  }

  getDetalhesContato(idContato: any) {
    return this.http.get<Contato>(`${this.API_URL}/contatos/${idContato}`);
  }

  createContato(contato: Contato) {
    return this.http.post<Contato[]>(`${this.API_URL}/contatos`, contato, this.httpOptions);

    // return this.http.post<Contato[]>(`${this.API_URL}/contatos`, contato, {
    //   headers: {
    //     Autorization: 'TOKEN AUTENTICAÇÃO'
    //   }
    // });
  }

  updateContato(idContato: any, contato: Contato) {
    return this.http.put<Contato[]>(`${this.API_URL}/contatos` + idContato, contato);
  }

  deleteContatos(idContato: any) {
    return this.http.delete<Contato[]>(`${this.API_URL}/contatos` + idContato);
  }
}
