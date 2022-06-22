import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/models/categoria.model';
import { CadastroService } from 'src/services/cadastro.service';
import { CreateCategoriaComponent } from '../create-categoria/create-categoria.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-categoria',
  templateUrl: './read-categoria.component.html',
  styleUrls: ['./read-categoria.component.css']
})
export class ReadCategoriaComponent implements OnInit {

  categoria: Categoria[] = [];
  colunas: string[] = ['codigo','nome','desc','acoes'];

  constructor(
    private service: CadastroService,
    private router: Router,
    public dialogRef: MatDialog,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.service.readCategoria().subscribe(categoria =>{
      this.categoria = categoria;
    });

  }

  openDialog(): void{
    const dialogRef = this.dialog.open(CreateCategoriaComponent, {
      width: '30%', height: '55%'
    })
  }

  voltar(): void {
    this.router.navigate(['/produtos']);
    //this.dialogRef.close();
  }

  refresh(): void {
    window.location.reload();
  }

}


