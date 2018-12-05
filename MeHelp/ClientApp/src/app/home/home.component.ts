import { Component, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  router: Router;
  public topicos: Topico[];


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router) {
    this.router = router;
    http.get<Topico[]>(baseUrl + 'api/TopicoAPI/ListarTopico').subscribe(result => {
      this.topicos = result;
      
    }, error => console.error(error));
    
  }


  editUser(id: string) {
    this.router.navigate(['/topico'], 
      { queryParams: { idtopico:id } });
    
  }

}

interface Topico {
  id : string;
  titulo: string;
  descricao: string;
  dataCria : Date;
  usuario: Usuario;
}

interface Usuario {
  id: string;
  nome: string;
}
