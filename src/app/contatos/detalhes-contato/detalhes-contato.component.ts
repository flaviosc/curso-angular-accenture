import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../listar-contatos/contato.interface';
import { ListarContatosService } from '../listar-contatos/listar-contatos.service';


@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {

  detalhesContato!: Contato;

  detalhesContatoCarregando: boolean = true;
  erroNoCarregamento: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private contatosService: ListarContatosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.carregarDetalhesContato();
  }

  carregarDetalhesContato() {
    const idContato = this.route.snapshot.paramMap.get('id');


    this.contatosService.getDetalhesContato(idContato)
      .pipe(
        take(1),
        finalize(() => this.detalhesContatoCarregando = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      )
  }


  onSuccess(response: Contato) {
    this.detalhesContato = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  voltar() {
    this.router.navigate(['/contatos']);
  }
}
