import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  @Input() inputValorContador = 0;
  @Output() inputValorContadorChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    this.inputValorContador++;
    this.inputValorContadorChange.emit(this.inputValorContador);
  }

  decrementar() {
    this.inputValorContador--;
    this.inputValorContadorChange.emit(this.inputValorContador);
  }

  // onChangeContador($event: any) {
  //   this.contadorAlterado.emit($event.target.value);
  // }
}
