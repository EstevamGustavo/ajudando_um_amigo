import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/models/categoria.model';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  produto : Produto = new Produto();
  categoria: Categoria[] = [];

  constructor(
    private service: CadastroService,
    private router: Router,
    public dialogRef: MatDialogRef<CadastroService>
  ){}

  salvarProduto(){
    this.service.createProduto(this.produto).subscribe(() => {
      this.voltar();
      this.refresh();
      this.router.navigate(['/produtos']);
    });
  }

  ngOnInit(): void {
    this.service.readCategoria().subscribe(categoria =>{
      this.categoria = categoria
    });
  }

  voltar(): void {
    this.dialogRef.close();
  }

  refresh(): void {
    window.location.reload();
  }
}
