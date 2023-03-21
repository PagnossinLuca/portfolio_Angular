import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Output() sesion: EventEmitter<any> = new EventEmitter<any>();
  usuario: string = "";
  contrasenia: string = "";
  subscription?: Subscription;



  constructor(private http: HttpClient,
              private servicioPortfolio: PortfolioService,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  iniciarSesion() {

    const {usuario, contrasenia} = this;

    this.authService.login(usuario, contrasenia)
  }
}
function newEventEmitter(): EventEmitter<any> {
  throw new Error('Function not implemented.');

}

