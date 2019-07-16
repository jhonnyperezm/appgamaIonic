import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GruposventaseleccionService } from './gruposventaseleccion.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-gruposventaseleccion',
  templateUrl: './gruposventaseleccion.page.html',
  styleUrls: ['./gruposventaseleccion.page.scss'],
})
export class GruposventaseleccionPage implements OnInit {


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

  valorTotalAdicionales: number = 0;
  totalAdicionalesMasArt: number = 0;
  adicionales: any;

  adicionalArr: any = [];
  idxSeleccion: any = [];

  registrosCarrito: any = [];



  idArticuloPrincipal: any;
  nombreArticuloPrincipal: any;
  costoEstimadoArticulo: any;
  idxArt: any;
  totalFinal: number;




  constructor(public router: ActivatedRoute, public dataGS: GruposventaseleccionService, public routers: Router) {
    this.idGru = this.router.snapshot.params.idGrupo;
    this.nomGru = this.router.snapshot.params.nombreGrupo;
    this.idxArt = this.router.snapshot.params.idxArt;

  }

  ngOnInit() {


    if (localStorage.getItem('data') === null) {
      this.DataCarrito = [];
      this.registrosCarrito = [];
    } else {
      this.DataCarrito = JSON.parse(localStorage.getItem('data'));
      this.contadorPrincipal = this.DataCarrito.length;
      this.registrosCarrito = this.DataCarrito.length;

    }

    this.idArticulo = localStorage.getItem('idArt')
    this.setArr(this.idArticulo);

    if (localStorage.getItem('total') === null) {
      this.total = 0;
    } else {
      this.total = JSON.parse(localStorage.getItem('total'))

    }

    /*  this.dataSeleccion = JSON.parse(localStorage.getItem('data'));
     console.log('cslg',this.dataSeleccion ) */
    console.log(this.DataCarrito);


  }


  setArr(idArt) {
    console.log(idArt);
    console.log(this.DataCarrito);
    const exist = this.DataCarrito.filter(x => x.idArticulo === parseInt(idArt, 0));

    /*  this.lista = []; */
    console.log(exist);

    this.idArticuloPrincipal = exist[0].idArticulo;
    this.nombreArticuloPrincipal = exist[0].nombreArticulo;
    this.costoEstimadoArticulo = exist[0].costoEstimado;
    this.totalAdicionalesMasArt = exist[0].costoEstimado;


   

    this.grupoSeleccion(idArt);
  }

  grupoSeleccion(id) {
    this.dataGS.getArticulosSeleccion(id).subscribe(data => {
      this.dataGrupoSeleccion = data;
      console.log(this.dataGrupoSeleccion[0].articulosGrupoSeleccionPojo);


    })

  }

  incrementaValor(datosAdicional) {

    // this.adicionales = valor;

    this.totalAdicionalesMasArt = this.totalAdicionalesMasArt + datosAdicional.incrementa;

    this.valorTotalAdicionales = this.valorTotalAdicionales + datosAdicional.incrementa;

    this.totalFinal = this.total + this.valorTotalAdicionales;

    localStorage.setItem('total', this.totalFinal.toString());

    this.nombreArticulo = datosAdicional.nombreArticulo;

    this.adicionalArr.push({
      idx: this.idxSeleccion.length + 1,
      valorAdicional: datosAdicional.incrementa,
      idArticuloAdicional: datosAdicional.idArticulo,
      nombreArticuloAdicional: datosAdicional.nombreArticulo
    })
    this.idxSeleccion.push('incrementa')

    
    for (let i = 0; i < this.DataCarrito.length; i++) {
      if (this.DataCarrito[i].idx === parseInt(this.idxArt, 0)) {
        this.DataCarrito[i].adicionales = this.adicionalArr;
      }

    }
    localStorage.setItem('data', JSON.stringify(this.DataCarrito));

    console.log('data', this.adicionalArr)

  }

  agregarArr() {

    Swal.fire({
      position:'center',
      type: 'success',
      title: 'Su Pedido se ha Añadido Correctamente',
      showConfirmButton: false,
      timer: 2000
    })
/* 
    for (let i = 0; i < this.DataCarrito.length; i++) {
      if (this.DataCarrito[i].idx === parseInt(this.idxArt, 0)) {
        this.DataCarrito[i].adicionales = this.adicionalArr;
      }

    }
    localStorage.setItem('data', JSON.stringify(this.DataCarrito));


    console.log(this.DataCarrito)
     */
    this.routers.navigate([`gruposventa/${this.idGru}/${ this.nomGru}`]);
    
  }


}
