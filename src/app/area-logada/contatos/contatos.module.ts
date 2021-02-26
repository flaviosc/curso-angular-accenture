import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContatosRoutingModule } from './contatos-routing.module';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';


@NgModule({
  imports: [
    CommonModule,
    ContatosRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListarContatosComponent,
    DetalhesContatoComponent,
    EditarContatoComponent
  ],
})
export class ContatosModule { }
