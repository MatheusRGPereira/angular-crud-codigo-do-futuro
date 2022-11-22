import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

export class ClienteService {

  static buscaClientePorId(id: Number): Cliente {
    let clientes: Cliente = {} as Cliente

    for (let i = 0; i < ClienteService.clientes.length; i++) {
      let clientesDb = ClienteService.clientes[i]
      if (clientesDb.id == id) {
        clientes = clientesDb
        break
      }
    }

    return clientes;
  }

  private static clientes: Cliente[] = [{
    id: 1,
    nome: "Juliana",
  },
  {
    id: 2,
    nome: "Bianca",
  }, {
    id: 3,
    nome: "Matheus",
  }, {
    id: 4,
    nome: "Carlos",
  },]

  public static buscaClientes(): Cliente[] {
    return ClienteService.clientes
  }

  public static adicionaCliente(cliente: Cliente): void {
    cliente.id = ClienteService.buscaClientes().length + 1
    ClienteService.clientes.push(cliente)
  }

  public static alteraCliente(cliente: Cliente): void {
    for (let i = 0; i < ClienteService.clientes.length; i++) {
      let clienteDb = ClienteService.clientes[i]
      if (clienteDb.id == cliente.id) {
        clienteDb = {
          ...cliente
        }
        break
      }
    }
  }
  public static excluirCliente(cliente: Cliente): void {
    let listaNova = []
    for (let i = 0; i < ClienteService.clientes.length; i++) {
      let clienteDb = ClienteService.clientes[i]
      if (clienteDb.id != cliente.id) {
        listaNova.push(clienteDb)
      }
    }

    ClienteService.clientes = listaNova
  }
}