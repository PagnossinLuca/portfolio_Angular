import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @Input() educ: any;
  @Input() educArray: any;

  miPortfolio: any;
  subscripcion?: Subscription
  sesion?: boolean
  editar: any;

  constructor(
    private datosPortfolio: PortfolioService,
    private authService: AuthService)
  {
    this.subscripcion = this.authService.getLogin().subscribe(data => this.sesion = data);
  }

  ngOnInit(): void {

    this.miPortfolio = this.datosPortfolio.consultarDatos().subscribe(data => {

      this.miPortfolio = data;
    });
  }

  onEditar(datosEdicion: any) {

    switch (datosEdicion.accion) {

      case 'editar':

        //Almacena el valor del objeto a editar
        this.editar = datosEdicion.indice;
        break;

      case 'borrar':

        //Elimina el objeto seleccionado
        this.datosPortfolio.borrarEducacion(this.educ.id).subscribe( data => {

          //Recarga la pagina
          location.reload()
        })
    }
  }
}
