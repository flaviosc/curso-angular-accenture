import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent  {
  deveExibir = true;

  listaFrutas = [
    'Maçã',
    'Laranja',
    'Mamão',
    'Pêra'
  ];

  listaCarros = [{
    placa: 'LKT-4856',
    cor: 'branco'
  }, {
    placa: 'LKT-4542',
    cor: 'preto'
  }, {
    placa: 'LKT-4554',
    cor: 'azul'
  }, {
    placa: 'LKT-8547',
    cor: 'amarelo'
  }, 
  ];
  
  trocarValor() {
    this.deveExibir = !this.deveExibir;
  }

  soma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
}
