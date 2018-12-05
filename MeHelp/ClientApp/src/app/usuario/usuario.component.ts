import { Component, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent {

  public topicos: Usuario[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Usuario[]>(baseUrl + 'api/TopicoAPI/ListarTopico').subscribe(result => {
      this.topicos = result;
    }, error => console.error(error));
  }
}

interface Usuario {
  id : string;
  titulo: string;
  descricao: string;
  dataCria : Date;
}

