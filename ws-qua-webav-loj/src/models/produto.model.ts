import { Categoria } from "./categoria.model";

export class Produto {

  codigo: number = 0;
  nome: String = '';
  desc: String = '';
  categoriaNome: Categoria = new Categoria();
  cor: String = '';
  valor: number = 0;
  foto: String = '';
  quantidade: number = 0;

}
