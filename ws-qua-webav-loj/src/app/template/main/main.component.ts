import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  produtos : Produto[] =[];

  constructor(private service: CadastroService) { }

  ngOnInit(): void {
    this.service.readProduto().subscribe(produtos => {
      this.produtos = produtos;
    })
  }

  adicionarCarrinho(produto: Produto){
    this.service.adicionarItem(produto);
  }

}
