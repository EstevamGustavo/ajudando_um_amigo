import { CadastroService } from 'src/services/cadastro.service';
import { Usuario } from 'src/models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.css']
})
export class DeleteUsuarioComponent implements OnInit {

  usuario:  Usuario = new Usuario();

  constructor(
    private service: CadastroService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const codigo = this.activatedRoute.snapshot.paramMap.get('codigo');
    this.service.readUserForId(Number(codigo)).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  excluirUser(){
    this.service.deleteUser(this.usuario.codigo).subscribe(() =>{
      this.router.navigate(['/users']);
    });
  }

}
