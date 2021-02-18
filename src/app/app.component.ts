import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeiro-projeto';

  inputPalavra = 'Carro';
  favoriteColor = 'green';
  headerTitle = 'Início';

  constructor() {
    setTimeout(() => {
      this.headerTitle = 'Seja bem-vindo =)';
    }, 5000);
  }

  eventoRecebido($event: any) {
    console.log('AppComponent: EVENTO RECEBIDO', $event);
  }
}
