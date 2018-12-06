import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from "../../Services/autenticacao.service";
import { AlertService } from "../../Services/alert.service";


@Component({
    moduleId: module.id,
    templateUrl: './template.component.html'
})

export class LoginComponent implements OnInit {
    usuario: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
      this.authenticationService.login(this.usuario.username, this.usuario.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error('Username or password is incorrect');
                    this.loading = false;
                });
    }
}
