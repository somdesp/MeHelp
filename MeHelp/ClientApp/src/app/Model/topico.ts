import { IUsuario } from './usuario';
export interface ITopico {
  id: number;
  usuario: IUsuario;
  // Tema Tema;
  // TopicoFilho:Topico
  dataCria: Date;
  titulo: string;
  descricao: string;

  resposta: ITopico[]

}
