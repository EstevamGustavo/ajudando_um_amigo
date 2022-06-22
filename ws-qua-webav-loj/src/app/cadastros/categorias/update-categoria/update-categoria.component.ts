import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/models/categoria.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-update-categoria',
  templateUrl: './update-categoria.component.html',
  styleUrls: ['./update-categoria.component.css']
})
export class UpdateCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria();

  constructor(
    private service: CadastroService,
    private router: Router,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const codigo = this.activateRoute.snapshot.paramMap.get('codigo');
    this.service.readCategoriaForId(Number(codigo)).subscribe(categoria =>{
      this.categoria = categoria;
    });
  }

  atualizarCategoria(){
    this.service.uptadeCategoria(this.categoria.codigo, this.categoria).subscribe(() =>{
      this.router.navigate(['/categorias']);
    });
  }
}
