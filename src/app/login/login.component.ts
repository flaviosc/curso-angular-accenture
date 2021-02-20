import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('emailInput') emailInput: ElementRef | undefined;
  @ViewChild('passwordInput') passwordInput: ElementRef | undefined;

  email: string = '';
  password: string = '';

  constructor() { }

  onSubmit(form: any) {    
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

    console.log(this.email);
    console.log(this.password);
  }

  exibeErro(nomeControle: string, form: any) {
    if(!form.controls[nomeControle]) { return false; }
    return form.controls[nomeControle]?.invalid && form.controls[nomeControle]?.touched;
  }

}
