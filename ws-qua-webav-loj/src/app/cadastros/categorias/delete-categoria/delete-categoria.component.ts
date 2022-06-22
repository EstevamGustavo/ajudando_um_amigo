import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/models/categoria.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-delete-categoria',
  templateUrl: './delete-categoria.component.html',
  styleUrls: ['./delete-categoria.component.css']
})
export class DeleteCategoriaComponent implements OnInit {

  categoria : Categoria = new Categoria();

  constructor(
    private service: CadastroService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const codigo = this.activatedRoute.snapshot.paramMap.get('codigo');
    this.service.readCategoriaForId(Number(codigo)).subscribe(categoria =>{
      this.categoria = categoria;
    });
  }

  excluirCategoria(){
    this.service.deleteCategoria(this.categoria.codigo).subscribe(() =>{
      this.router.navigate(['/categorias']);

    });
  }

}
