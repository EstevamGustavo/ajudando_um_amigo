import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { Produto } from '../models/produto.model';
import { Usuario } from '../models/usuario.model';
import { Categoria } from '../models/categoria.model';
import { Pedido } from 'src/models/pedido.model';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  URLProduto = 'http://localhost:3000/produtos';
  URLPessoa = 'http://localhost:3000/usuarios';
  URLCatagoria = 'http://localhost:3000/categorias';
  URLPedido = 'http://localhost:3000/pedidos';

  constructor(private http: HttpClient) {}

  createProduto(produto: Produto): Observable<any> {
    console.log(produto);

    return this.http.post<any>(this.URLProduto, produto);
  }

  readProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.URLProduto);
  }

  readProdutoForId(id: number): Observable<Produto> {
    return this.http.get<Produto>(this.URLProduto + '/' + id);
  }

  updateProduto(
    idAtualizar: Number,
    produtoAlterado: Produto
  ): Observable<any> {
    return this.http.put<any>(
      this.URLProduto + '/' + idAtualizar,
      produtoAlterado
    );
  }

  deleteProduto(codigoProduto: Number): Observable<any> {
    return this.http.delete<any>(this.URLProduto + '/' + codigoProduto);
  }

  /* CRUD de Usuarios*/

  createUser(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.URLPessoa, usuario);
  }

  readUser(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.URLPessoa);
  }

  readUserForId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.URLPessoa + '/' + id);
  }

  uptadeUser(
    idUsuarioAtualizar: Number,
    usuarioAlterado: Usuario
  ): Observable<any> {
    return this.http.put(
      this.URLPessoa + '/' + idUsuarioAtualizar,
      usuarioAlterado
    );
  }

  deleteUser(idUsuario: Number): Observable<any> {
    return this.http.delete<any>(this.URLPessoa + '/' + idUsuario);
  }

  /* CRUD de Categorias*/
  createCategoria(categoria: Categoria): Observable<any> {
    return this.http.post<any>(this.URLCatagoria, categoria);
  }

  readCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.URLCatagoria);
  }

  readCategoriaForId(codigo: number): Observable<Categoria> {
    return this.http.get<Categoria>(this.URLCatagoria + '/' + codigo);
  }

  uptadeCategoria(
    codigoCategoriaAtualizar: Number,
    categoriaAlterado: Categoria
  ): Observable<any> {
    return this.http.put(
      this.URLCatagoria + '/' + codigoCategoriaAtualizar,
      categoriaAlterado
    );
  }

  deleteCategoria(codigoCategoria: Number): Observable<any> {
    return this.http.delete<any>(this.URLCatagoria + '/' + codigoCategoria);
  }

  /* CRUD de Pedidos*/

  createPedido(pedido: Pedido): Observable<any> {
    return this.http.post<any>(this.URLPedido, pedido);
  }

  readPedido(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.URLPedido);
  }

  readPedidoForId(codigo: number): Observable<Pedido> {
    return this.http.get<Pedido>(this.URLPedido + '/' + codigo);
  }

  updatePedido(
    codigoPedidoAtualizar: Number,
    pedidoAlterado: Pedido
  ): Observable<any> {
    return this.http.put(
      this.URLPedido + '/' + codigoPedidoAtualizar,
      pedidoAlterado
    );
  }

  deletePedido(codigoPedido: Number): Observable<any> {
    return this.http.delete<any>(this.URLPedido + '/' + codigoPedido);
  }

  /* Carrinho*/

  private _totalDeItens: number = 0;
  private _totalDeItensNoCarrinho: Subject<number> = new Subject<number>();
  public totalDeItensNoCarrinho = this._totalDeItensNoCarrinho.asObservable();
  private _valorTotal: number = 0;
  public valorTotalDoPedido: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  public isCarrinhoVazio: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  private updateAllItens(itens: Produto[]) {
    this._totalDeItens = 0;
    this._valorTotal = 0;
    for (const item of itens) {
      this._totalDeItens += item.quantidade;
      this._valorTotal += item.valor * item.quantidade;
    }
    if (this._totalDeItens < 1) {
      this.isCarrinhoVazio.next(true);
    } else {
      this.isCarrinhoVazio.next(false);
    }
    this._totalDeItensNoCarrinho.next(this._totalDeItens);
    this.valorTotalDoPedido.next(this._valorTotal);
  }

  private _mapItens = new Map<number, Produto>();
  private _itens: BehaviorSubject<Produto[]> = new BehaviorSubject<Produto[]>(
    []
  );
  public itens = this._itens.asObservable();
  public fonteDeDados = new ItemDataSource();

  private updateDados() {
    this._itens.next([...this._mapItens.values()]);
    this.fonteDeDados.atualizar([...this._mapItens.values()]);
    this.updateAllItens([...this._mapItens.values()]);
  }

  adicionarItem(produto: Produto) {
    const item = this._mapItens.get(produto.codigo);
    if (item) {
      produto.quantidade = item.quantidade ? item.quantidade + 1 : 1;
    }
    if (typeof produto.quantidade === 'undefined') {
      produto.quantidade = 1;
    }
    this._mapItens.set(produto.codigo, produto);
    this.updateDados();
  }

  atualizarItem(produto: Produto) {
    const item = this._mapItens.get(produto.codigo);
    if (produto.quantidade < 1) {
      this.removerItem(produto);
    } else {
      this._mapItens.set(produto.codigo, produto);
      this.updateDados();
    }
  }

  removerItem(produto: Produto) {
    const item = this._mapItens.get(produto.codigo);
    if (item) {
      this._mapItens.delete(produto.codigo);
    }
  }
}

export class ItemDataSource extends DataSource<Produto> {
  private _streamDeDados = new ReplaySubject<Produto[]>();

  connect(): Observable<Produto[]> {
    return this._streamDeDados;
  }

  atualizar(dados: Produto[]) {
    this._streamDeDados.next(dados);
  }

  disconnect() {}
}
