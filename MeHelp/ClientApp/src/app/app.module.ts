import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateComponent } from './Components/template/template.component';
import { LoginComponent } from './Components/template/login.component';
import { HttpModule } from '@angular/http';
import { NavMenuComponent } from './Components/nav-menu/nav-menu.component';
import { HomeComponent } from './Components/home/home.component';
import { CounterComponent } from './Components/counter/counter.component';
import { FetchDataComponent } from './Components/fetch-data/fetch-data.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { TopicoComponent } from './Components/topico/topico.component';
import { AppConfig } from './app.config';
import { AlertService } from './Services/alert.service';
import { AuthenticationService} from './Services/autenticacao.service';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    TemplateComponent,
    FetchDataComponent,
    UsuarioComponent,
    TopicoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'usuario', component: UsuarioComponent },
      { path: 'topico/:idtopico', component: TopicoComponent },

    ])
  ],
  providers: [
    AppConfig,
    AlertService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
