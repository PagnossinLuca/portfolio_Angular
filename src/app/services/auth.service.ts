import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private subject = new Subject<any>()
  sub?: Subscription
  sesion?: boolean
  // localhost:8080
  url = "https://lucapagnossinportfolioapi.onrender.com/iniciar_sesion"
  token: any;

  constructor(private http: HttpClient, private router: Router) {}

  //Método para iniciar sesión
  login(usuario: String, contrasenia: String) {

    const formSesion = {usuario, contrasenia};

    this.http.post(this.url, formSesion).subscribe((resp: any) =>{

      if (resp) {

        //Almacena el token en la pc
        localStorage.setItem('token', resp.token);
        this.router.navigate(['body']);
      }
    })
  }

  //Método para cerrar sesión
  logout() {

    localStorage.removeItem('token')

    this.router.navigate(["login"])

    this.subject.next(localStorage.getItem('token') !== null)
  }

  //Método para verificar la sesión
  getLogin(): Observable<any> {

    this.subject.next(localStorage.getItem('token') !== null)

    return this.subject.asObservable();
  }
}
