import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GruposventaseleccionService } from './gruposventaseleccion.service';
import { IonSegment } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-gruposventaseleccion',
  templateUrl: './gruposventaseleccion.page.html',
  styleUrls: ['./gruposventaseleccion.page.scss']
})
export class GruposventaseleccionPage implements OnInit {

  @ViewChild(IonSegment) segment:IonSegment;


  DataCarrito: any = [];
  contadorPrincipal: any = 0;
  total: number = 0;
  idGru: any;
  nomGru: any;
  dataSeleccion: any = [];
  lista: any = [];
  idLista: any = [];
  contadorArt: number;
  idArticulo: any;
  dataGrupoSeleccion: any = [];
  valorArticulo: number;
  nombreArticulo: any;
  dataString:string;

  valorTotalAdicionales: number = 0;
  totalAdicionalesMasArt: number = 0;
  adicionales: any;

  adicionalArr: any = [];
  idxSeleccion: any = [];

  registrosCarrito: any = [];

  dataArticuloSeleccion: any = [];
  idArt: any;
  totalFinal: number;

  DataArrayArticulos: any = [];
  img:any;
  // imagenUrl:any;


  constructor(public router: ActivatedRoute, 
    public dataGS: GruposventaseleccionService, 
    public routers: Router,
    public toastCtrl:ToastController) {
    this.idGru = this.router.snapshot.params.idGrupo;
    this.nomGru = this.router.snapshot.params.nombreGrupo;
    this.idArticulo = this.router.snapshot.params.idArt;
    this.setArr(this.idArticulo);
    this.grupoSeleccion(this.idArticulo);
  }

  ngOnInit() {
    if (localStorage.getItem('data') === null) {
      this.DataCarrito = [];
    } else {
      this.DataCarrito = JSON.parse(localStorage.getItem('data'));
      this.contadorPrincipal = this.DataCarrito.length;
      for (const iterator of this.DataCarrito) {
        this.registrosCarrito.push('registrocarrito1');
      }
    }

    if (localStorage.getItem('total') === null) {
      this.total = 0;
    } else {
      this.total = parseInt(localStorage.getItem('total'), 0)
    }
  }

  setArr(idArt) {
    this.dataGS.getArticulosGrupos(this.idGru).subscribe(data => {
      this.DataArrayArticulos = data;
      const exist = this.DataArrayArticulos.filter(x => x.idArticulo == parseInt(idArt, 0));
       console.log(exist);
       
      this.dataArticuloSeleccion.idArticuloPrincipal = exist[0].idArticulo;
      this.dataArticuloSeleccion.nombreArticuloPrincipal = exist[0].nombreArticulo;
      this.dataArticuloSeleccion.descripcion = exist[0].descripcion;
      this.dataArticuloSeleccion.seleccion = exist[0].seleccion;
      this.dataArticuloSeleccion.valorVenta = exist[0].articulosListaPreciosPojo[0].valorVenta;
      this.totalAdicionalesMasArt = exist[0].articulosListaPreciosPojo[0].valorVenta;
      this.img = exist[0].imagen;

      
      if (this.img != undefined) {

        this.dataArticuloSeleccion.imagen = 'data:image/png;base64,' +  this.img;
       
        
      } else {
        this.dataArticuloSeleccion.imagen = "/assets/img/no-image.png";
      }
      
      
    });
  }

  grupoSeleccion(id) {
    this.dataGS.getArticulosSeleccion(id).subscribe(data => {
      this.dataGrupoSeleccion = data;
    })

  }

  incrementaValor(datosAdicional) {
    this.totalAdicionalesMasArt = this.totalAdicionalesMasArt + datosAdicional.incrementa;

    this.valorTotalAdicionales = this.valorTotalAdicionales + datosAdicional.incrementa;

    this.nombreArticulo = datosAdicional.nombreArticulo;

    this.adicionalArr.push({
      idx: this.idxSeleccion.length + 1,
      valorAdicional: datosAdicional.incrementa,
      idArticuloAdicional: datosAdicional.idArticulo,
      nombreArticuloAdicional: datosAdicional.nombreArticulo
    })
    this.idxSeleccion.push('incrementa')

  }

  agregarArr(datosArticulo) {

    this.DataCarrito.push({
      idx: this.registrosCarrito.length + 1,
      valorVenta: datosArticulo.valorVenta,
      descripcion: datosArticulo.descripcion,
      idArticulo: datosArticulo.idArticuloPrincipal,
      nombreArticulo: datosArticulo.nombreArticuloPrincipal,
      seleccion: datosArticulo.seleccion,
      idGrupo: this.idGru,
      adicionales: this.adicionalArr,
      imagen: datosArticulo.imagen

    })
    this.registrosCarrito.push('incremento1');

    this.totalFinal = this.total + this.totalAdicionalesMasArt;

    localStorage.setItem('data', JSON.stringify(this.DataCarrito));
    localStorage.setItem('total', this.totalFinal.toString());

    this.routers.navigate([`inicio`]);
    
  }

  
  redireccionCarrito(){
    this.DataCarrito = JSON.parse(localStorage.getItem('data'))
    this.dataString = JSON.parse(localStorage.getItem('data')) ;
   console.log(this.dataString);
    this.routers.navigate([`/carrito`])
  }


  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Agrego Adicional',
      position:"top",
      color:"toast",
      duration: 500,
    });
    toast.present();
  }




}
