import { IAnexos } from './anexos';
export interface IUsuario {
  id: number,
  nome: string,
  rgm: string,
  dataNasci: Date,
  uploadArquivo : IAnexos
}

