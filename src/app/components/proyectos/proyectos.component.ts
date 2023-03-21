import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() prjt: any;
  @Input() prjtArray: any;

  miPortfolio: any;
  subscripcion?: Subscription
  sesion?: boolean
  revisarSesion: boolean = localStorage.getItem('token') !== null
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
        this.datosPortfolio.borrarProyecto(this.prjt.id).subscribe( data => {

          //Recarga la pagina
          location.reload()
        })
    }
  }

}
