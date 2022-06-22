import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/models/pedido.model';
import { CadastroService, ItemDataSource } from 'src/services/cadastro.service';
import { Produto } from 'src/models/produto.model';

@Component({
  selector: 'app-read-pedido',
  templateUrl: './read-pedido.component.html',
  styleUrls: ['./read-pedido.component.css']
})
export class ReadPedidoComponent implements OnInit {

  pedido: Pedido[] = [];
  colunas: string[] = ['codigo','nome','vlrunitario','subtotal','quantidade'];

  valorTotalDoPedido: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  itensDoCarrinho: ItemDataSource = new ItemDataSource();
  isCarrinhoVazio: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(
    private service: CadastroService,
  ) { }

  ngOnInit(): void {
    this.itensDoCarrinho = this.service.fonteDeDados;
    this.valorTotalDoPedido = this.service.valorTotalDoPedido;
    this.isCarrinhoVazio = this.service.isCarrinhoVazio;
  }

  subTotal(produto: Produto) {
    return produto.valor * produto.quantidade;
  }

  atualizarItem(produto: Produto){
    this.service.atualizarItem(produto);
  }

  formatar(valor: BehaviorSubject<number>){
    const conversor = new Intl.NumberFormat('pt-BR',{
      style: 'currency',
      currency: 'BRL',
    });
    return conversor.format(valor.getValue());
  }

}
