import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input() skill: any;
  @Input() skillsArray: any;

  miPortfolio: any;
  subscripcion?: Subscription
  sesion?: boolean
  revisarSesion: boolean = localStorage.getItem('token') !== null
  editar: any;

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
        this.editar = datosEdicion.indice;
        break;

      case 'borrar':

        //Elimina el objeto seleccionado
        this.datosPortfolio.borrarSkill(this.skill.id).subscribe( data => {

          //Recarga la pagina
          location.reload()
        })
    }
  }
}
