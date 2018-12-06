import { IAnexos } from './anexos';
export interface IUsuario {
  id: number,
  nome: string,
  rgm: string,
  login: string,
  senha: string,
  dataNasci: Date,
  uploadArquivo : IAnexos
}

