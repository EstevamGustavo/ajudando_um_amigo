import { Router, ActivatedRoute } from '@angular/router';
import { CadastroService } from 'src/services/cadastro.service';
import { Usuario } from 'src/models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(
    private service: CadastroService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const codigo = this.activatedRoute.snapshot.paramMap.get('codigo');
    this.service.readUserForId(Number(codigo)).subscribe(usuario =>{
      this.usuario = usuario;
    });
  }

  atualizarUser(){
    this.service.uptadeUser(this.usuario.codigo, this.usuario).subscribe(() =>{
      this.router.navigate(['/users']);
    })
  }

}
