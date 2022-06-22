import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Categoria } from 'src/models/categoria.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css']
})
export class CreateCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();

  constructor(
    private service: CadastroService,
    private router: Router,
    public dialogRef: MatDialogRef<CadastroService>

  ) { }

  ngOnInit(): void {
  }

  criarCategoria(){
    this.service.createCategoria(this.categoria).subscribe(() =>{
      this.router.navigate(['/categorias']);

    })
  }

  voltar(): void {
    this.dialogRef.close();
  }

  refresh(): void{
    window.location.reload();
  }

}
