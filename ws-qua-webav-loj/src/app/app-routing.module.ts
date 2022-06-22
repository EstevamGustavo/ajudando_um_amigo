import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './view/admin/admin.component';
import { HomeComponent } from './view/home/home.component';
import { SobreComponent } from './template/sobre/sobre.component';
import { MenuComponent } from './view/menu/menu.component';

import { EditarComponent } from './cadastros/produtos/editar/editar.component';
import { ExcluirComponent } from './cadastros/produtos/excluir/excluir.component';
import { IncluirComponent } from './cadastros/produtos/incluir/incluir.component';
import { ListarComponent } from './cadastros/produtos/listar/listar.component';

import { UpdateUsuarioComponent } from './cadastros/usuarios/update-usuario/update-usuario.component';
import { DeleteUsuarioComponent } from './cadastros/usuarios/delete-usuario/delete-usuario.component';
import { CreateUsuarioComponent } from './cadastros/usuarios/create-usuario/create-usuario.component';
import { ReadUsuarioComponent } from './cadastros/usuarios/read-usuario/read-usuario.component';

import { ReadCategoriaComponent } from './cadastros/categorias/read-categoria/read-categoria.component';
import { CreateCategoriaComponent } from './cadastros/categorias/create-categoria/create-categoria.component';
import { UpdateCategoriaComponent } from './cadastros/categorias/update-categoria/update-categoria.component';
import { DeleteCategoriaComponent } from './cadastros/categorias/delete-categoria/delete-categoria.component';

import { ReadPedidoComponent } from './view/pedido/read-pedido/read-pedido.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    //children:[
    //  {path: "menu", component: MenuComponent}
    //]
  },
  { path: 'sobre', component: SobreComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'produtos', component: ListarComponent },
  { path: 'produtos/incluir', component: IncluirComponent },
  { path: 'produtos/editar/:codigo', component: EditarComponent },
  { path: 'produtos/excluir/:codigo', component: ExcluirComponent },
  { path: 'users', component: ReadUsuarioComponent },
  { path: 'users/incluir', component: CreateUsuarioComponent },
  { path: 'users/editar/:codigo', component: UpdateUsuarioComponent },
  { path: 'users/excluir/:codigo', component: DeleteUsuarioComponent },
  { path: 'categorias', component: ReadCategoriaComponent },
  { path: 'categorias/incluir', component: CreateCategoriaComponent },
  { path: 'categorias/editar/:codigo', component: UpdateCategoriaComponent },
  { path: 'categorias/excluir/:codigo', component: DeleteCategoriaComponent },
  { path: 'pedidos', component: ReadPedidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
