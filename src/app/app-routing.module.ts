import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ClientListComponent } from './client-list/client-list.component';
import { FormClientComponent } from './form-client/form-client.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: '', component: TableComponent},
  {path: 'table', component: TableComponent},
  {path: 'client-list', component: ClientListComponent},
  {path: 'client-alterar', component: FormClientComponent},
  {path: 'client-alterar/:id', component: FormClientComponent},
  {path: 'formulario', component: FormularioComponent},
  { path: 'form-alterar/:id', component: FormularioComponent },
  { path: 'carrinho', component: CarrinhoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
