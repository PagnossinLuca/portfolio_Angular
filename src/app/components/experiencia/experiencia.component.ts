import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  @Input() exp: any;
  @Input() expArray: any;

  miPortfolio: any;
  subscripcion?: Subscription
  sesion?: boolean
  editar: any;

  constructor(
    private datosPortfolio: PortfolioService,
    private authService: AuthService
  )
  {
    this.subscripcion = this.authService.getLogin().subscribe(data => this.sesion = data);
  }

  ngOnInit(): void {
  }

  onEditar(datosEdicion: any) {

    switch (datosEdicion.accion) {

      case 'editar':

        //Almacena el valor del objeto a editar
        this.editar = datosEdicion.indice;
        break;

      case 'borrar':

        //Elimina el objeto seleccionado
        this.datosPortfolio.borrarExperiencia(this.exp.id).subscribe( data => {

          //Recarga la pagina
          location.reload()
        })
    }
  }

}
