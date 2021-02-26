import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContatosRoutingModule } from './contatos-routing.module';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';


@NgModule({
  imports: [
    CommonModule,
    ContatosRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListarContatosComponent,
    DetalhesContatoComponent,
    NovoContatoComponent
  ],
})
export class ContatosModule { }
