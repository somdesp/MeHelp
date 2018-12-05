import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ITopico } from '../../Model/topico';


@Component({
  selector: 'app-topico',
  templateUrl: './topico.component.html'
})
export class TopicoComponent implements OnInit {
  public topico: ITopico;
  idTopico;
  constructor(private route: ActivatedRoute, http: HttpClient, @Inject('BASE_URL') baseUrl: string,) {
    this.route.params.subscribe(res =>
      http.get<ITopico>(baseUrl + 'api/TopicoAPI/TopicoSelecionadoJson?idtopico=' + res.idtopico).subscribe(result => {
          this.topico = result;

        },
        error => console.error(error))
    );
  }


  ngOnInit() {


  }
}




