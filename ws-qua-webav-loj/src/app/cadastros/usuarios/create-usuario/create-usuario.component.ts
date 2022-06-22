import { MatDialogRef } from '@angular/material/dialog';
import { CadastroService } from 'src/services/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(
    private service: CadastroService,
    private router: Router,
    public dialogRef: MatDialogRef<CadastroService>
  ) { }

  ngOnInit(): void {
  }

  criarUser(){
    this.service.createUser(this.usuario).subscribe(() =>{
      this.voltar();
      this.refresh();
      this.router.navigate(['/']);
    });
  }

  voltar(): void{
    this.dialogRef.close();
  }

  refresh(): void{
    window.location.reload();
  }

}
