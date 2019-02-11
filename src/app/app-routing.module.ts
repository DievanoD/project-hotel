import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuartosComponent } from './components/quartos/quartos/quartos.component';
import { QuartosAddComponent } from './components/quartos/quartos-add/quartos-add.component';
import { QuartosEditComponent } from './components/quartos/quartos-edit/quartos-edit.component';
import { QuartosDetailsComponent } from './components/quartos/quartos-details/quartos-details.component';
import { TipoQuartosAddComponent } from './components/tipoQuarto/tipo-quartos-add/tipo-quartos-add.component';
import { TipoQuartosComponent } from './components/tipoQuarto/tipo-quartos/tipo-quartos.component';
import { TipoQuartosDetailsComponent } from './components/tipoQuarto/tipo-quartos-details/tipo-quartos-details.component';
import { TipoQuartosEditComponent } from './components/tipoQuarto/tipo-quartos-edit/tipo-quartos-edit.component';
import { ClienteEditComponent } from './components/cliente/cliente-edit/cliente-edit.component';
import { ClienteComponent } from './components/cliente/cliente/cliente.component';
import { ClienteAddComponent } from './components/cliente/cliente-add/cliente-add.component';
import { ClienteDetailsComponent } from './components/cliente/cliente-details/cliente-details.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClienteComponent,
    data: { title: 'Lista de clientes'},
    // canActivate: [AuthGuardService]
  },

  {
    path: 'clientes-add',
    component: ClienteAddComponent,
    data: { title: 'Adicionar clientes'},
    // canActivate: [AuthGuardService]
  },
  {
    path: 'clientes-details/:id',
    component: ClienteDetailsComponent,
    data: { title: 'Detalhes de Clientes'},
    // canActivate: [AuthGuardService]
  },
  {
    path: 'clientes-edit/:id',
    component: ClienteEditComponent,
    data: { title: 'Alteracao de clientes'},
    // canActivate: [AuthGuardService]
  },
  //// QUARTOS
  {
    path: 'quartos',
    component: QuartosComponent,
    data: {title: 'Lista de quartos'}
  },
  {
    path: 'quartos-add',
    component: QuartosAddComponent,
    data: {title: 'Adicionar quartos'}
  },
  {
    path: 'quartos-details/:id',
    component: QuartosDetailsComponent,
    data: {title: 'Detalhes de quartos'},
    // canActivate: [AuthGuardService]
  },
  {
    path: 'quartos-edit/:id',
    component: QuartosEditComponent,
    data: {title: 'Alteracao de quartos'},
    // canActivate: [AuthGuardService]
  },
  //// TIPO DE QUARTO
  {
    path: 'tipoquartos',
    component: TipoQuartosComponent,
    data: {title: 'Lista tipo de quartos'}
  },
  {
    path: 'tipoquartos-add',
    component: TipoQuartosAddComponent,
    data: {title: 'Adicionar tipo de quarto'},
    // canActivate: [AuthGuardService]
  },
  {
    path: 'tipoquartos-details/:id',
    component: TipoQuartosDetailsComponent,
    data: {title: 'Detalhes tipo de quartos'},
    // canActivate: [AuthGuardService]
  },
  {
    path: 'tipoquartos-edit/:id',
    component: TipoQuartosEditComponent,
    data: {title: 'Alteracao tipo de quartos'},
    // canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
