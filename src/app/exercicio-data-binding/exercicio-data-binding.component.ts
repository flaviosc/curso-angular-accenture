import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {
  
  @Input() palavra: string = '';
  @Input() color: string = '';
  @Output() clicado = new EventEmitter();

  imageURL = 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ce2ece60-9b32-11e6-95ab-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg';
  initialValue = 'Valor inicial';
  isDisabled = true;
  accessibilityText = 'Um texto acessível';

  valorDoInput = '';
  valorDefaultContador = 5;
  
  constructor() {
    setTimeout(() => {
      console.log('isDisabled: ', this.isDisabled)
      this.isDisabled = false;
    }, 3000);
  }

  ngOnInit(): void {
  }

  onClick() {
    console.log('Clicou!');
  }

  digitouAlgo($event: any) {
    this.valorDoInput = $event.target.value;
    console.log($event);
  }
  
  passouMouse() {
    console.log('Alguém passou o mouse');
  }

  onClickBotaoEmissor($event: any){
    console.log('Devo emitir informações para o componente pai');
    this.clicado.emit($event);
  }

  onContadorAlterado($event: any) {
    console.log('CONTADOR ALTERADO: ', $event);
  } 
}
