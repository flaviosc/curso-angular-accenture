import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html',
  styleUrls: ['./area-logada.component.scss']
})
export class AreaLogadaComponent implements OnInit {

  headerTitle = 'Sistema';

  constructor() {
    setTimeout(() => {
      this.headerTitle = 'Área logada - Seja bem-vindo =)';
    }, 5000);
  }

  ngOnInit(): void {
  }

}
