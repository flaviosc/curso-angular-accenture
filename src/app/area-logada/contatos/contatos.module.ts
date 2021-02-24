import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContatosRoutingModule } from './contatos-routing.module';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';


@NgModule({
  imports: [
    CommonModule,
    ContatosRoutingModule,
  ],
  declarations: [
    ListarContatosComponent,
    DetalhesContatoComponent
  ],
})
export class ContatosModule { }
