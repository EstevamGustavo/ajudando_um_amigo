import { Usuario } from "./usuario.model";
import { Produto } from "./produto.model";

export class Pedido {

  codigo: Number = 0;
  data: any;
  itens: Produto = new Produto();
  total: Number = 0;
  usuarioId: Usuario = new Usuario();
  //statusId: {type: mongoose.Schema.Types.ObjectId, ref: 'status'}
}
