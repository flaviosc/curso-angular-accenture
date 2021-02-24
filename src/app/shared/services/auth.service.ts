import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from '../interfaces/usuario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: Usuario | undefined;
  token: string = '';

  constructor(
    private router: Router,
  ) { }

  setUsuario(usuario: Usuario) {
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuario() {

    if(this.usuario) {
      return this.usuario;
    }

    const usuarioGuardado = localStorage.getItem('usuario');
    if(usuarioGuardado) {
      this.usuario = JSON.parse(usuarioGuardado);
      return this.usuario;
    }

    return null;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    const tokenGuardado = localStorage.getItem('token');
    if(tokenGuardado) {
      this.token = tokenGuardado;
      return this.token;
    }

    return null;
  }

  estaLogado(): boolean {
    return this.getUsuario() && this.getToken() ? true : false;
  }

  logout() {
    this.usuario = undefined;
    this.token = '';
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
