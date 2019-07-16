import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http,Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { RutasService } from 'src/app/services/rutas.service';




@Injectable({
  providedIn: 'root'
})


export class GruposventaseleccionService {

  baseUrlGruposventaseleccion = 'articulosGrupoSeleccionCantidadKiosko/'


  path: any;
  token: any;
  headers: any;
  options: any;
  rol: any;


  constructor(public http: HttpClient, public https: Http , public rutasService: RutasService) {
    this.path = this.rutasService.getPath();
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'token': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdGlnIiwiaWF0IjoxNTYxNjQxMjAxLCJleHAiOjE1NjE3Mjc2MDEsImlkVXN1YXJpbyI6MSwiaWRDbGllbnRlIjoxLCJ1c2VyIjoiR2FtYSIsInJvbCI6IkdhbWFzb2Z0IiwiY3JlYWRvUG9yIjoxLCJ1c2VyX2VtYWlsIjoiZ2FtYUBnYW1hLmNvbSIsImlkX3JvbCI6MX0.zV7bHZtkuwOA_UKTEZ5JWVrAYnye5ekWsNFNVUlOzrA'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getArticulosSeleccion(id) {
    const response = this.https.get(this.path + this.baseUrlGruposventaseleccion + 'findSeleccionArticulo/' + id, this.options).pipe(map(res => res.json()));
    return response
  }
}
