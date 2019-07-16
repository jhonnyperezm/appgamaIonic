import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GruposventaService } from './gruposventa.service';
import { ModalController, NavController, IonList } from '@ionic/angular';
import { ModalgruposventaPage } from '../modalgruposventa/modalgruposventa.page';
import { isNgTemplate } from '@angular/compiler';
/* import { HeaderComponent } from '../../components/header/header.component' */


@Component({
  selector: 'app-gruposventa',
  templateUrl: './gruposventa.page.html',
  styleUrls: ['./gruposventa.page.scss'],
  /* providers: [ HeaderComponent ] */
})
export class GruposventaPage implements OnInit, DoCheck {

  idGru:any;
  nomGru:any;
  listaArticulos :any = [];
  datosGrupoModal:any = [];
  contadorPrincipal:any = 0;
  DataCarrito: any = [];
  DataArrayArticulos: any = [];
  total: number = 0;
  registrosCarrito: any = [];
  contadorArt:number;

  @ViewChild('lista') Lista:IonList
  
  constructor(
              public router: ActivatedRoute,
              public rotr: Router,
              public gruposVentas: GruposventaService,
              public nav: NavController,
              public modalCtrl: ModalController,
              /* public headerComponent: HeaderComponent */) {
              
    this.idGru = this.router.snapshot.params.idGrupo;
    this.nomGru = this.router.snapshot.params.nombreGrupo;

  }

  
  ngOnInit() {
    this.getArticulos(this.idGru);
  }

  ngDoCheck() {
    
   

    if (localStorage.getItem('data') === null ) {
      this.DataCarrito = [];
    } else {
    this.DataCarrito = JSON.parse(localStorage.getItem('data'));
    this.contadorPrincipal = this.DataCarrito.length;
    }


    if (localStorage.getItem('total') === null ) {
      this.total = 0;
    } else {
    this.total = parseInt(localStorage.getItem('total'));
    
    }


  }

  getArticulos(id){
    this.gruposVentas.getArticulosGrupos(id).subscribe(data => {
      this.DataArrayArticulos = data;
      this.listaArticulos = [];
      let contador;
      for (const key of this.DataArrayArticulos) {
        const exist = this.DataCarrito.filter(x => x.idArticulo === key.idArticulo );
        contador = exist.length;

        this.listaArticulos.push({
          costoEstimado: key.costoEstimado,
          descripcion: key.descripcion,
          idArticulo: key.idArticulo,
          nombreArticulo: key.nombreArticulo,
          seleccion: key.seleccion,
          contadorArt: contador
          
        })
      }
      return this.listaArticulos;
    })
  }


  async openModal(datos){
  
    const modal = await this.modalCtrl.create({
       
      component: ModalgruposventaPage,
      
      componentProps: {
       data : datos,
        
       }
    });
     await modal.present();

    const {data} = await modal.onDidDismiss();
 
  }

  borrar(idArt, indexLA){
    for (let i = 0; i < this.listaArticulos.length; i++) {
      if (i === indexLA) {
        this.listaArticulos[i].contadorArt = this.listaArticulos[i].contadorArt - 1;
        this.total = this.total - this.listaArticulos[i].costoEstimado;
        this.contadorPrincipal = this.contadorPrincipal - 1;
      }
      
    }

    const existe = this.DataCarrito.filter(x => x.idArticulo === idArt)
    if (existe.length !== 0) {
      for (let i = 0; i < existe.length; i++) {
        if (i<=0) {
        console.log(existe[i].index);
          for (let j = 0; j < this.DataCarrito.length; j++) {
            console.log(existe[i].index);
            console.log(this.DataCarrito[j].index);
            if (existe[i].index === this.DataCarrito[j].index) {
              let index2 = this.DataCarrito.indexOf(this.DataCarrito[j]);
              this.DataCarrito.splice(index2, 1);
            }      
          }
        }   
      }
      console.log(this.DataCarrito);
    }

    localStorage.setItem('data', JSON.stringify(this.DataCarrito))
    localStorage.setItem('total', this.total.toString())
   
   
    this.Lista.closeSlidingItems();
    
  }

  

  incrementarContador(datosArticulo, index) {
    this.registrosCarrito = [];

    for (let i = 0; i < this.DataCarrito.length; i++) {
      this.registrosCarrito.push('incremento1');
      
    }
    for (let i = 0; i < this.listaArticulos.length; i++) {
      if (this.listaArticulos[i].idArticulo === datosArticulo.idArticulo) {
        this.listaArticulos[i].contadorArt = this.listaArticulos[i].contadorArt + 1;
        this.contadorPrincipal = this.contadorPrincipal + 1;
      }  
    }


    this.DataCarrito.push({
      idx: this.registrosCarrito.length + 1,
      costoEstimado: datosArticulo.costoEstimado,
      descripcion: datosArticulo.descripcion,
      idArticulo: datosArticulo.idArticulo,
      nombreArticulo: datosArticulo.nombreArticulo,
      seleccion: datosArticulo.seleccion,
      adicionales: []
      
    })
    this.registrosCarrito.push('incremento1');

    this.total = this.total + datosArticulo.costoEstimado;

    if (datosArticulo.seleccion === true) {
        this.rotr.navigate(['/gruposventaseleccion',this.idGru,this.nomGru,this.registrosCarrito.length]);
    }

    console.log('datos carrito', this.DataCarrito);
    localStorage.setItem('data', JSON.stringify(this.DataCarrito))
    localStorage.setItem('total', this.total.toString())
    localStorage.setItem('idArt', datosArticulo.idArticulo )


  }


  redireccionHome(){
   /*  this.headerComponent.redireccionar(); */
    this.rotr.navigate([`/inicio`])
  }


  

}
