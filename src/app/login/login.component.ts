import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('emailInput') emailInput: ElementRef | undefined;
  @ViewChild('passwordInput') passwordInput: ElementRef | undefined;

  email = '';
  password = '';

  estaCarregando = false;
  erroNoLogin = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  onSubmit(form: NgForm) {   
    this.erroNoLogin = false;
    
    if(!form.valid) { 

      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if(form.controls.email.invalid) {
        this.emailInput?.nativeElement.focus();
        return;
      }

      this.passwordInput?.nativeElement.focus();

      return;
    }

    this.login();
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if(!form.controls[nomeControle]) { return false; }
    return form.controls[nomeControle]?.invalid && form.controls[nomeControle]?.touched;
  }

  login() {
    this.estaCarregando = true;

    this.loginService.logar(this.email, this.password)
      .pipe(
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.router.navigate(['home']),
        error => this.onErrorLogin()
      )
  }

  onErrorLogin() {
    this.erroNoLogin = true;
    console.log('Não logou');
  }

}
