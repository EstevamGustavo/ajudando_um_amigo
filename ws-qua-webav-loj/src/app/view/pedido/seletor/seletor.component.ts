import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from 'src/models/produto.model';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.css']
})
export class SeletorComponent implements OnInit {

  @Input() produto: Produto = {} as Produto;
  @Output() eventoAtualizar: EventEmitter<Produto> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  adicionarItem(){
    this.produto.quantidade++;
    this.eventoAtualizar.emit(this.produto);
  }

  removerItem(){
    if(this.produto.quantidade > 0){
      this.produto.quantidade--;
      this.eventoAtualizar.emit(this.produto);
    }
  }
}
