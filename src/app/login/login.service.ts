import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from '../shared/services/auth.service';
import { LoginResponse } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService
  ) { }

  logar(email: string, senha: string): Observable<LoginResponse> {
    // return this.http.post(`${this.API_URL}/auth`, contato, this.httpOptions);

    if(email === 'teste@teste' && senha === 'teste') {
      return of({
        usuario: {
          nome: 'Flávio',
          sobrenome: 'Santana',
          email: 'teste'
        },
        token: 'AAA5586FF45asda',
      }).pipe(
        delay(2000),
        tap(response => {
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.token);
        }) 
      );
    }

    const error = throwError(new Error('Usuário ou senha incorretos.'));
    return timer(3000)
      .pipe(
        mergeMap(() => error)
      );
  }
}
