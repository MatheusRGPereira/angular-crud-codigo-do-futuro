import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { ProdutoService } from './ProdutoService';

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  constructor(pedido: Pedido,) { }

  static buscaPedidoPorId(id: Number): Pedido {
    let pedido: Pedido = {} as Pedido

    for (let i = 0; i < PedidoService.pedidos.length; i++) {
      let pedidoDb = PedidoService.pedidos[i]
      if (pedidoDb.id == id) {
        pedido = pedidoDb
        break
      }
    }
    return pedido;
  }
  private static pedidos: Pedido[] = [{
    id: 1,
    idCliente: 1,
    items: [{
      id: 2,
      nome: "Maça",
      descricao: "Gala",
      preco: 7.89
    }],
    data: new Date(),
  }]

  public static buscaPedido(): Pedido[] {
    return PedidoService.pedidos
  }

  public static adicionaProduto(pedido: Pedido): void {
    pedido.id = PedidoService.buscaPedido().length + 1
    PedidoService.pedidos.push(pedido)
  }


  public static excluirProduto(pedido: Pedido): void {
    let listaNova = []
    for (let i = 0; i < PedidoService.pedidos.length; i++) {
      let pedidoDb = PedidoService.pedidos[i]
      if (pedidoDb.id != pedido.id) {
        listaNova.push(pedidoDb)
      }
    }
    PedidoService.pedidos = listaNova
  }

  static buscaItemPorId(id: Number): Pedido {
    let pedido: Pedido = {} as Pedido
    for (let i = 0; i < PedidoService.pedidos.length; i++) {
      for(let p = 0; p < pedido.items.length; p++){
        let pedidoDb = PedidoService.pedidos[i].items[p]
        if (pedidoDb.id == id) {
          pedido.items[p] = pedidoDb
          break
        }
      }
    }
    return pedido;
  }

  public buscaItem(){
    let pedido: Pedido = {} as Pedido
  }
}
