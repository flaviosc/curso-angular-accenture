import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../contato.interface';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-exercicio-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.scss']
})
export class ListarContatosComponent implements OnInit {

  contatos: Array<Contato> = [];

  contatosCarregando: boolean = true;
  erroNoCarregamento: boolean = false;

  constructor(
    private contatosService: ContatosService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos() {
    this.contatosService.getContatos()
      .pipe(
        take(1),
        finalize(() => this.contatosCarregando = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }

  onSuccess(response: Contato[]) {
    this.contatos = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  irParaDetalhes(idContato: number) {
    this.router.navigate([`contatos/${idContato}`]);
  }

  deletarContato(idContato: number) {
    this.contatosService.deleteContato(idContato)
      .subscribe(
        response => this.onSuccessDeletarContato(idContato),
        error => this.onErrorDeletarContato(error),
      );
  }
  onErrorDeletarContato(error: any): void {
  }

  onSuccessDeletarContato(idContato: number): void {
    this.toastr.success('Sucesso!', 'Contato deletado com sucesso');
    this.contatos = this.contatos.filter(contatos => contatos.id !== idContato)
  }

  novoContato() {
    this.router.navigate(['contatos/novo']);
  }
}
