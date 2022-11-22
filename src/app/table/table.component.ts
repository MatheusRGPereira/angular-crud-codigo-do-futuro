import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../models/produto';
import { ProdutoService } from '../service/ProdutoService';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
  
  public produtos:Produto[] = ProdutoService.buscaProdutos();


  novo(){
    this.router.navigateByUrl("/formulario")
  }

  excluir(produto: Produto){
    ProdutoService.excluirProduto(produto)
    this.produtos = ProdutoService.buscaProdutos()
  }

  comprar(produto: Produto){
    this.produtos = ProdutoService.buscaProdutos();
  }
}
