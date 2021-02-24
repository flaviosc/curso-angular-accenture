import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes: Array<Transacao> = [];
  pagina: number = 1;

  estaCarregando: boolean = true;
  erroNoCarregamento: boolean = false;

  constructor(private extratoService: ExtratoService) {
    
  }

  ngOnInit() {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;
    
    this.extratoService.getTransacoes(this.pagina)
      .pipe(
        take(1),
        finalize(() => { this.estaCarregando = false })
      )
      .subscribe(
        response => this.onSuccess(response), 
        error => this.onError(error)
      );
  }

  onSuccess(response: Transacao[]) {
    this.transacoes = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  paginaAnterior() {
    this.pagina = this.pagina - 1;
    this.carregarExtrato();
  }

  proximaPagina() {
    this.pagina = this.pagina + 1;
    this.carregarExtrato();
  }
}
