import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
  
  public clientes:Cliente[] = ClienteService.buscaClientes()

  novo(){
    this.router.navigateByUrl("/client-alterar")
  }

  excluir(cliente:Cliente){
    ClienteService.excluirCliente(cliente)
    this.clientes = ClienteService.buscaClientes()
  }
}