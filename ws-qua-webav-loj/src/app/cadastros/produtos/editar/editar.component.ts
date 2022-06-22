import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/models/categoria.model';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  produto : Produto = new Produto();
  categoria: Categoria[] = [];

  constructor(
    private service: CadastroService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.service.readCategoria().subscribe(categoria =>{
      this.categoria = categoria;
    });

    const codigo = this.activatedRoute.snapshot.paramMap.get('codigo');
    this.service.readProdutoForId(Number(codigo)).subscribe(produto => {
        this.produto = produto;
    });

  }

  atualizarProduto(){
    this.service.updateProduto(this.produto.codigo, this.produto).subscribe(() => {
      this.router.navigate(['/produtos']);
    });
  }

}
