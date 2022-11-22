import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  constructor(
    private router: Router,
    private routerParams: ActivatedRoute
  ) { }

  public titulo: String = "Novo Cliente"
  public cliente: Cliente = {} as Cliente

  ngOnInit(): void {
    let id: number = this.routerParams.snapshot.params['id']
    if (id) {
      this.titulo = "Atualizando Cliente"
      this.cliente = ClienteService.buscaClientePorId(id)
    }
  }
  save() {
    if (this.cliente.id > 0) {
      ClienteService.alteraCliente(this.cliente)
    } 
    else {
      ClienteService.adicionaCliente({
        id: 0,
        nome: this.cliente.nome
      });    
    }

    this.router.navigateByUrl("/client-list")
  }

}
