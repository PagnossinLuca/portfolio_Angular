import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  miPortfolio: any;
  subscripcion?: Subscription;
  sesion?: boolean
  editar: boolean = false

  constructor(private datosPortfolio: PortfolioService, private authService: AuthService)
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
        this.editar = !this.editar;
        break;
    }
  }

  arrayVacio(array: Array<any>): boolean {

    return (array.length == 0 || array == undefined)
  }
}
