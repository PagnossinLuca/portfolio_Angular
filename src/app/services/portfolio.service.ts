import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  private apiUrl = 'https://lucapagnossinportfolioapi.onrender.com';

  sesion = this.consultarDatos();

  constructor(private http:HttpClient) { }

  consultarDatos():Observable<any>{

    const url = `${this.apiUrl}/usuarios/ver`;
    const urlPrueba = `${this.apiUrl}/usuario/completo?id=1`;

    return this.http.get(urlPrueba);
  }



  iniciarSesion(formSesion: any): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}/iniciar_sesion`, formSesion)
  }

  modificarUsuario(form: any): Observable<any> {

    return this.http.put<any>(`${this.apiUrl}/usuario/modificar`, form)
  }

  // Experiencia //

  crearExperiencia(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/experiencia/crear`, { 'id_usuario': 1 })
  }

  modificarExperiencia(form: any): Observable<any> {

    return this.http.put<any>(`${this.apiUrl}/experiencia/modificar`, form)
  }

  borrarExperiencia(objeto: any): Observable<any> {

    return this.http.delete<any>(`${this.apiUrl}/experiencia/eliminar?id=${objeto}`)
  }

  // Educacion //

  modificarEducacion(form: any): Observable<any> {

    return this.http.put<any>(`${this.apiUrl}/educacion/modificar`, form)
  }

  borrarEducacion(objeto: any): Observable<any> {

    return this.http.delete<any>(`${this.apiUrl}/educacion/eliminar?id=${objeto}`)
  }

  crearEducacion(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/educacion/crear`, { 'id_usuario': 1 })
  }

  // Skills //

  modificarSkill(form: any): Observable<any> {

    return this.http.put<any>(`${this.apiUrl}/skill/modificar`, form)
  }

  crearSkill(): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}/skill/crear`, { 'id_usuario': 1 })
  }

  borrarSkill(objeto: any): Observable<any> {

    return this.http.delete<any>(`${this.apiUrl}/skill/eliminar?id=${objeto}`)
  }

  // Proyectos //

  crearProyecto(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/proyecto/crear`, { 'id_usuario': 1 })
  }

  modificarProyecto(form: any): Observable<any> {

    return this.http.put<any>(`${this.apiUrl}/proyecto/modificar`, form)
  }

  borrarProyecto(objeto: any): Observable<any> {

    return this.http.delete<any>(`${this.apiUrl}/proyecto/eliminar?id=${objeto}`)
  }

  guardarAsset(archivo: any): Observable<any> {

    return this.http.post<any>(`${this.apiUrl}/guardar_asset`, archivo)
  }
}
