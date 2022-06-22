import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/models/categoria.model';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';
import { ReadCategoriaComponent } from '../../categorias/read-categoria/read-categoria.component';
import { IncluirComponent } from '../incluir/incluir.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  produtos : Produto[] = [];
  categoria: Categoria[] = [];
  colunas: string[] = ['codigo','nome','desc','quantidade','categoria','cor','valor','acoes'];


  constructor(
    private service : CadastroService,
    public dialog: MatDialog,
  ){ }

  ngOnInit(): void {
    this.service.readProduto().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  openIncluirProdutos(): void{
    const dialogRef = this.dialog.open(IncluirComponent,{
      width: '30%', height: '65%'
    })
  }

  openControleCategoria(): void{
    const dialogRef = this.dialog.open(ReadCategoriaComponent,{
      width: '50%', height: '60%'
    })
  }

}
