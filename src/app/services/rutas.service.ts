import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  constructor() { }

  getPath() {
    // RUTA PARA  DESARROLLO LOCAL
    // const path = '/backgama/ptigGama/';
    //const path = 'http://localhost:8080/backgama/ptigGama/';

    // RUTA PARA AMBIENTE DESARROLLO
    //const path = 'http://gd3.gamasoftcol.com:8081/backgama_dev/ptigGama_dev/';

    // RUTA PARA AMBIENTE PRODUCCION
      const path = 'https://gd3.gamasoftcol.com:8443/backgama/ptigGama/';
      return path;
  }

}
