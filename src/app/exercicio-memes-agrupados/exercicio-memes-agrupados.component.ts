import { Component, OnInit } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-memes-agrupados.constants';

@Component({
  selector: 'app-exercicio-memes-agrupados',
  templateUrl: './exercicio-memes-agrupados.component.html',
  styleUrls: ['./exercicio-memes-agrupados.component.scss']
})
export class ExercicioMemesAgrupadosComponent implements OnInit {

  arrayMemes: any;
  // urlBase = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images/';
  PREFIXO_IMAGEM_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images/';
  constructor() { 
    this.arrayMemes = MEMES_AGRUPADOS_POR_CATEGORIA;
  }

  ngOnInit(): void {
  }

}
