import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Luca Pagnossin - Portfolio';

  miPortfolio: any;

  constructor(private datosPortfolio: PortfolioService,
              private router: Router) { }

  ngOnInit(): void {

    this.datosPortfolio.consultarDatos().subscribe(data => {

      this.miPortfolio = data;
    })

    this.router.navigate(['body']);
  }
}
