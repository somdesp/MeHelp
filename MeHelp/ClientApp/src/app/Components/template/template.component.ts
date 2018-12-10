import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from "../../Services/autenticacao.service";
import { AlertService } from "../../Services/alert.service";



@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent{
  model: any = {};
  usuario: any = {};
  loading = false;
  returnUrl: string;

  myItem = localStorage.getItem("model");
 public val_login;
  //constructor(private route: ActivatedRoute,
  //  private router: Router,
  //  private authenticationService: AuthenticationService,
  //  private alertService: AlertService) {
  //  if (this.myItem == null)
  //    this.val_login = false
  //  return this.val_login
  //  if (this.myItem != null)
  //    this.val_login = true

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) {
    if (this.myItem == null)
      this.val_login = false
    return this.val_login
    if (this.myItem != null)
      this.val_login = true

  }

  //ngOnInit() {
  //  // reset login status
  //  this.authenticationService.logout();

  //  // get return url from route parameters or default to '/'
  //  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  //}

  //login() {
  //  this.loading = true;
  //  this.authenticationService.login(this.usuario.username, this.usuario.password)
  //    .subscribe(
  //      data => {
  //        this.router.navigate([this.returnUrl]);
  //      },
  //      error => {
  //        this.alertService.error('Username or password is incorrect');
  //        this.loading = false;
  //      });
  //}

}
