import { Injectable } from '@angular/core';
import { ProdutoService } from './ProdutoService';

@Injectable({
  providedIn: 'root'
})
export class PedidoObserverService {

  constructor() { }


  public quantidade:Number = 0

  atualizarQuantidade(){
    console.log("-----Entrou no metodo ------")
    this.quantidade = ProdutoService.buscaProdutos.length;
  }
}
