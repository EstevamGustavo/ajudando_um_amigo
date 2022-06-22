import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavComponent } from './template/nav/nav.component';
import { HomeComponent } from './view/home/home.component';
import { AdminComponent } from './view/admin/admin.component';
import { SobreComponent } from './template/sobre/sobre.component';
import { IncluirComponent } from './cadastros/produtos/incluir/incluir.component';
import { EditarComponent } from './cadastros/produtos/editar/editar.component';
import { ExcluirComponent } from './cadastros/produtos/excluir/excluir.component';
import { ListarComponent } from './cadastros/produtos/listar/listar.component';
import { CreateUsuarioComponent } from './cadastros/usuarios/create-usuario/create-usuario.component';
import { ReadUsuarioComponent } from './cadastros/usuarios/read-usuario/read-usuario.component';
import { UpdateUsuarioComponent } from './cadastros/usuarios/update-usuario/update-usuario.component';
import { DeleteUsuarioComponent } from './cadastros/usuarios/delete-usuario/delete-usuario.component';

import { CreateCategoriaComponent } from './cadastros/categorias/create-categoria/create-categoria.component';
import { ReadCategoriaComponent } from './cadastros/categorias/read-categoria/read-categoria.component';
import { UpdateCategoriaComponent } from './cadastros/categorias/update-categoria/update-categoria.component';
import { DeleteCategoriaComponent } from './cadastros/categorias/delete-categoria/delete-categoria.component';

import { MenuComponent } from './view/menu/menu.component';
import { MainComponent } from './template/main/main.component';
import { AsideComponent } from './template/aside/aside.component';

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon'
import { MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ReadPedidoComponent } from './view/pedido/read-pedido/read-pedido.component';
import { CarrinhoComponent } from './view/pedido/carrinho/carrinho.component';
import { SeletorComponent } from './view/pedido/seletor/seletor.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AdminComponent,
    SobreComponent,
    IncluirComponent,
    EditarComponent,
    ExcluirComponent,
    ListarComponent,
    AsideComponent,
    MainComponent,
    MenuComponent,
    CreateUsuarioComponent,
    ReadUsuarioComponent,
    UpdateUsuarioComponent,
    DeleteUsuarioComponent,
    CreateCategoriaComponent,
    ReadCategoriaComponent,
    UpdateCategoriaComponent,
    DeleteCategoriaComponent,
    ReadPedidoComponent,
    CarrinhoComponent,
    SeletorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatTableModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    CarouselModule,
    MatRippleModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
