import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logar(email: string, senha: string) {
    // return this.http.post(`${this.API_URL}/auth`, contato, this.httpOptions);

    if(email === 'teste@teste' && senha === 'teste') {
      return of({
        usuario: {
          nome: 'Vitor',
          sobrenome: 'Farias',
          email: 'teste'
        },
        token: 'AAA5586FF45asda',
      }).pipe(
        delay(2000)
      );
    }

    const error = throwError(new Error('Usuário ou senha incorretos.'));
    return timer(3000)
      .pipe(
        mergeMap(() => error)
      );
  }
}
