import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-topico',
  templateUrl: './topico.component.html'
})
export class TopicoComponent implements OnInit {
  public topico: Topico;
  idTopico;
  constructor(private route: ActivatedRoute, http: HttpClient, @Inject('BASE_URL') baseUrl: string,) {
  }

  ngOnInit() {


  }
}



interface Topico {
  Id: number;
  // usuario: Usuario;
  // Tema Tema;
  // TopicoFilho:Topico
  dataCria: Date;
  Titulo: string;
  Descricao: string;

}
