import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor(
    private loginService: LoginService,
  ) { }

  onSubmit(form: NgForm) {    
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
    this.loginService.logar(this.email, this.password)
      .subscribe(
        response => {
          console.log('Logou!');
        }, 
        error => {
          console.log('Não logou');
        }
      )
  }

}
