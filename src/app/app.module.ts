import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { BodyComponent } from './components/body/body.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { AniadirComponent } from './components/aniadir/aniadir.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const appRoutes: Routes = [
  {path: 'body', component: BodyComponent},
  {path: 'login', component: LoginComponent},
  {path: 'footer', component: FooterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    PresentationComponent,
    BodyComponent,
    EducacionComponent,
    LoginComponent,
    SkillsComponent,
    EdicionComponent,
    AniadirComponent,
    FormularioComponent,
    ExperienciaComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
