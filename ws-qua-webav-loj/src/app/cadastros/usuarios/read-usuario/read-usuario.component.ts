import { CreateUsuarioComponent } from '../create-usuario/create-usuario.component';
import { MatDialog } from '@angular/material/dialog';
import { CadastroService } from 'src/services/cadastro.service';
import { Usuario } from 'src/models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-usuario',
  templateUrl: './read-usuario.component.html',
  styleUrls: ['./read-usuario.component.css']
})
export class ReadUsuarioComponent implements OnInit {

  usuario: Usuario[] = [];
  colunas: string[] = ['codigo','nome','fone','email','acoes'];


  constructor(
    private service: CadastroService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.service.readUser().subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(CreateUsuarioComponent,{
      width: '60%', height: '70%'
    })
  }


}
