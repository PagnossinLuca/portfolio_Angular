import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  miPortfolio: any;
  subscripcion?: Subscription;
  sesion?: boolean

  constructor(private datosPortfolio: PortfolioService, private authService: AuthService)
  {
    this.subscripcion = authService.getLogin().subscribe(data => this.sesion = data)
  }

  ngOnInit(): void {

    this.miPortfolio = this.datosPortfolio.consultarDatos().subscribe(data => {

      this.miPortfolio = data;
    });
  }
}
