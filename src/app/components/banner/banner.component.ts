import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  miPortfolio: any;
  subscripcion?: Subscription
  sesion?: any

  constructor(private datosPortfolio: PortfolioService, private authService: AuthService) { this.subscripcion = this.authService.getLogin().subscribe(data => this.sesion = data); }

  ngOnInit(): void {

    this.miPortfolio = this.datosPortfolio.consultarDatos().subscribe(data => {

      this.miPortfolio = data;
    });
  }
}
