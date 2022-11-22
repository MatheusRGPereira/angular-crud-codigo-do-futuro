import { Injectable } from "@angular/core";
import { Cliente } from "./cliente";
import { Produto } from "./produto";

@Injectable({
    providedIn: 'root'
  })

export class Pedido {
    id!:number;
    idCliente!:number
    items!:Produto[];
    data!: Date;

}
