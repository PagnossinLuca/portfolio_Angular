import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-aniadir',
  templateUrl: './aniadir.component.html',
  styleUrls: ['./aniadir.component.css'],
})
export class AniadirComponent implements OnInit {

  @Input() obj: any;
  @Input() modificar: string | undefined;

  nuevoObj: any;

  aniadirObj: boolean = false;

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {}

  aniadir() {
    //Crea un objeto

    switch (this.modificar) {

      case 'experiencia':

        this.datosPortfolio.crearExperiencia().subscribe((data) => {

          this.aniadirObj = !this.aniadirObj;

          this.nuevoObj = data;
        });
        break;

      case 'educacion':

        this.datosPortfolio.crearEducacion().subscribe((data) => {

          this.aniadirObj = !this.aniadirObj;

          this.nuevoObj = data;
        });
        break;

      case 'skill':

      this.datosPortfolio.crearSkill().subscribe((data) => {

        this.aniadirObj = !this.aniadirObj;

        this.nuevoObj = data;
      });
      break;

      case 'proyecto':

      this.datosPortfolio.crearProyecto().subscribe((data) => {

        this.aniadirObj = !this.aniadirObj;

        this.nuevoObj = data;
      });
      break;
    }
  }
}
