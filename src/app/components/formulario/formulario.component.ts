import { Component, Input, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  @Input() obj: any;
  @Input() modificar: string | undefined;

  nuevoObj: any;

  keys: string[] | undefined;

  keyString: string = "";

  formData = new FormData()

  constructor(private datosPortfolio: PortfolioService, private router: Router) {

  }

  ngOnInit(): void {

    this.nuevoObj = this.obj

    this.keys = Object.keys(this.obj)
  }

  enviar() {

    if (this.formData !== undefined) {

      this.datosPortfolio.guardarAsset(this.formData).subscribe(data => {})
    }

    switch(this.modificar) {

      case 'portfolio':

      this.datosPortfolio.modificarUsuario(this.nuevoObj).subscribe((data) => {

        //Recarga la pagina
        location.reload()
      })
      break;

      case 'experiencia':

      this.datosPortfolio.modificarExperiencia(this.nuevoObj).subscribe((data) => {

        //Recarga la pagina
        location.reload()
      })
      break;

      case 'educacion':

      this.datosPortfolio.modificarEducacion(this.nuevoObj).subscribe((data) => {

        //Recarga la pagina
        location.reload()
      })
      break;

      case 'skill':

      this.datosPortfolio.modificarSkill(this.nuevoObj).subscribe((data) => {

        //Recarga la pagina
        location.reload()
      })
      break;

      case 'proyecto':

      this.datosPortfolio.modificarProyecto(this.nuevoObj).subscribe((data) => {

        //Recarga la pagina
        location.reload()
      })
      break;
    }
  }

  verTipo(variable: any): string {

    return typeof variable;
  }

  devolverString(key: any): string {

    key = String(key)

    return key
  }

  seleccionarArchivo(event: any, key: string) {

    let archivo: File = event.target.files[0]

    this.nuevoObj[key] = archivo.name

    this.formData.append("archivo", archivo)
  }

}
