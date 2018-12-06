import { Component, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router,  ActivatedRoute } from "@angular/router";
import { ITopico } from "../../Model/topico";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  router: Router;
  model: any = {};
  loading = false;
  returnUrl: string;
  public topicos: ITopico[];


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router) {
    this.router = router;
    http.get<ITopico[]>(baseUrl + 'api/TopicoAPI/ListarTopico').subscribe(result => {
      this.topicos = result;
      
    }, error => console.error(error));
    
  }


 }

