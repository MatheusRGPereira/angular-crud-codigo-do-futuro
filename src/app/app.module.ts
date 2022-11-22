import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './carrinho/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientListComponent } from './client-list/client-list.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormClientComponent } from './form-client/form-client.component';
import { CarrinhoNotificacaoComponent } from './carrinho-notificacao/carrinho-notificacao.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
    ClientListComponent,
    CarrinhoComponent,
    FormClientComponent,
    CarrinhoNotificacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
