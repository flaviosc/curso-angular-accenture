import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contato } from './contato.interface';
import { ListarContatosService } from './listar-contatos.service';

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
    private contatosService: ListarContatosService,
    private router: Router,
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
}
