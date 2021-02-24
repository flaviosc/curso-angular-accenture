import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  eventoRecebido($event: any) {
    console.log('AppComponent: EVENTO RECEBIDO', $event);
  }
}
