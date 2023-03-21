import { Component, OnInit } from '@angular/core';
import { Navigation, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  miPortfolio: any;
  sesion?: boolean
  subscripcion?: Subscription
  linkRouter: string = ""

  constructor(private datosPortfolio: PortfolioService,
              private authService: AuthService,
              public router: Router)
  {
    this.subscripcion = this.authService.getLogin().subscribe(data => this.sesion = data);
  }

  ngOnInit(): void {

    this.miPortfolio = this.datosPortfolio.consultarDatos().subscribe(data => {

      this.miPortfolio = data;
    });
  }

  logIn() {

    //Navega al formulario para el login
    this.router.navigate(["login"])
  }

  logOut() {

    //Llama al servicio de autenticación para cerrar sesion
    this.authService.logout()
  }
}
