import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatListModule} from '@angular/material/list';
// import {MatButtonModule} from '@angular/material/button';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import {MatCardModule} from '@angular/material/card';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, 
  MatToolbarModule,
  MatMenuModule, MatSidenavModule, MatListModule } from "@angular/material";

import {MatRadioModule} from '@angular/material/radio';

import {MatSelectModule} from '@angular/material/select';

import {MatIconModule} from '@angular/material/icon';

import { QuartosComponent } from './components/quartos/quartos/quartos.component';
import { QuartosAddComponent } from './components/quartos/quartos-add/quartos-add.component';
import { QuartosEditComponent } from './components/quartos/quartos-edit/quartos-edit.component';
import { QuartosDetailsComponent } from './components/quartos/quartos-details/quartos-details.component';
import { LayoutModule } from '../../node_modules/@angular/cdk/layout';

import { TipoQuartosComponent } from './components/tipoQuarto/tipo-quartos/tipo-quartos.component';
import { TipoQuartosDetailsComponent } from './components/tipoQuarto/tipo-quartos-details/tipo-quartos-details.component';
import { TipoQuartosEditComponent } from './components/tipoQuarto/tipo-quartos-edit/tipo-quartos-edit.component';
import { TipoQuartosAddComponent } from './components/tipoQuarto/tipo-quartos-add/tipo-quartos-add.component';
import { ClienteComponent } from './components/cliente/cliente/cliente.component';
import { ClienteAddComponent } from './components/cliente/cliente-add/cliente-add.component';
import { ClienteDetailsComponent } from './components/cliente/cliente-details/cliente-details.component';
import { ClienteEditComponent } from './components/cliente/cliente-edit/cliente-edit.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ClienteAddComponent,
    ClienteDetailsComponent,
    ClienteEditComponent,
    QuartosComponent,
    QuartosAddComponent,
    QuartosEditComponent,
    QuartosDetailsComponent,
    TipoQuartosAddComponent,
    TipoQuartosComponent,
    TipoQuartosDetailsComponent,
    TipoQuartosEditComponent,
    TipoQuartosAddComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Adicionar
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
