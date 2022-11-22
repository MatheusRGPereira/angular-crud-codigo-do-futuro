import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/produto';
import { ProdutoService } from '../service/ProdutoService';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(
    private router: Router,
    private routerParams: ActivatedRoute
  ) { }

  public titulo: String = "Novo Produto"
  public produto: Produto = {} as Produto

  ngOnInit(): void {
    let id: number = this.routerParams.snapshot.params['id']
    if (id) {
      this.titulo = "Atualizando Produto"
      this.produto = ProdutoService.buscaProdutoPorId(id)
    }
  }

  save() {
    if (this.produto.id > 0) {
      ProdutoService.alteraProduto(this.produto)
    } 
    else {
      ProdutoService.adicionaProduto({
        id: 0,
        nome: this.produto.nome,
        descricao: this.produto.descricao,
        preco: this.produto.preco

      });    
    }

    this.router.navigateByUrl("/table")
  }



}
