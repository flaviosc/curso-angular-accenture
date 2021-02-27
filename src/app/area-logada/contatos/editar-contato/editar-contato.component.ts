import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../contato.interface';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.scss']
})
export class EditarContatoComponent implements OnInit {

  idContato: any;
  contatoForm!: FormGroup;

  estaCarregando = true;
  erroNoCarregamento = false;

  constructor(
    private formBuilder: FormBuilder,
    private contatosService: ContatosService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();

    this.idContato = this.route.snapshot.paramMap.get('id');

    if(this.idContato) {
      this.carregarContato();
    }
  }

  inicializarFormulario() {
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      ag: ['', [Validators.required, Validators.minLength(4)]],
      cc: ['', [Validators.required, Validators.minLength(5)]],
      banco: ['', Validators.required],
    });
    
    this.estaCarregando = false;
    // this.contatoForm = new FormGroup({
    //   nome: new FormControl(),
    //   banco: new FormControl()
    // });
  }

  carregarContato() {
    this.contatosService.getDetalhesContato(this.idContato)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
    )
      .subscribe(
        response => this.onSuccessCarregarContato(response),
        error => this.onError(error)
    )
  }

  salvarContato() {
    this.contatosService.updateContato(this.idContato, this.contatoForm.value)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
    )
      .subscribe(
        response => this.onSuccessSalvarContato(),
        error => this.onError(error)
    )
  }

  estaEditando = () => Boolean(this.idContato)

  exibeErro(nomeControle: string) {
    if (!this.contatoForm.get(nomeControle)) {
      return false;
    }

    return this.contatoForm.get(nomeControle)?.invalid && this.contatoForm.get(nomeControle)?.touched;
  }

  validateAllFormFields(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = this.contatoForm.get(field);
      if(control instanceof FormControl) {
        control?.markAsTouched();
      } else if(control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    });

  }

  onSubmit() {
    if(this.contatoForm.invalid) {
      this.validateAllFormFields(this.contatoForm);
    }

    // if(this.contatoForm.invalid) { 

    //   this.contatoForm.controls.email.markAsTouched();
    //   this.contatoForm.controls.nome.markAsTouched();
    //   this.contatoForm.controls.banco.markAsTouched();

    // }

    if(this.estaEditando()) {
      this.salvarContato();
      return;
    }

    this.criarContato();
  }

  criarContato() {
    console.log(this.contatoForm.value);
    this.contatosService.createContato(this.contatoForm.value)
      .subscribe(
        response => this.onSuccessCriarContato(),
        error => this.onErrorCriarContato()
      );
  }

  onSuccessCriarContato() {
    this.toastr.success('Sucesso!', 'Contato criado com sucesso');
    this.router.navigate(['contatos']);
  }

  onErrorCriarContato() {
    this.toastr.error('Erro', 'Alguma coisa deu errado');
  }

  onSuccessCarregarContato(response: Contato) {
    this.contatoForm.patchValue(response);
  }

  onSuccessSalvarContato() {
    this.toastr.success('Sucesso!', 'Contato editado com sucesso');
    this.router.navigate(['contatos']);
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    this.toastr.error('Erro', 'Alguma coisa deu errado');
  }
}
