import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { IonList, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit, DoCheck {

  @ViewChild('lista') Lista: IonList

  DataCarrito: any = [];
  contadorPrincipal: any = 0;
  total: number = 0;
  carritoFinal: any = [];
  registrosCarrito: any = [];
  registrosCarritoFinal: any = [];


  constructor( public router : Router,
               public alertcCtrl: AlertController,

  ) { }
  ngDoCheck(){}

  ngOnInit() {


    if (localStorage.getItem('data') === null) {
      this.DataCarrito = [];
    } else {
      this.DataCarrito = JSON.parse(localStorage.getItem('data'));
      this.contadorPrincipal = this.DataCarrito.length;
      console.log(this.DataCarrito);
    }


    if (localStorage.getItem('total') === null) {
      this.total = 0;
    } else {
      this.total = JSON.parse(localStorage.getItem('total'))

    }

    console.log(this.DataCarrito);
    this.agregarCarrito(this.DataCarrito);

    this.registrosCarrito = [];

    for (let i = 0; i < this.DataCarrito.length; i++) {
      this.registrosCarrito.push('incremento1');

    }
  }

  agregarCarrito(datosCarrito) {
    this.carritoFinal = [];
    for (const key of datosCarrito) {
 
      let exist;
      if (key.adicionales.length === 0) {
        exist = this.carritoFinal.filter(x => x.idArticulo === key.idArticulo && x.adicionales.length === 0);
      } else {
        exist = this.carritoFinal.filter(x => x.idArticulo === key.idArticulo && x.adicionales == key.adicionales);
      }

      if (exist.length === 0) {
    
        this.carritoFinal.push({
          costoEstimado: key.costoEstimado,
          descripcion: key.descripcion,
          idArticulo: key.idArticulo,
          idx: this.registrosCarritoFinal.length + 1,
          nombreArticulo: key.nombreArticulo,
          adicionales: key.adicionales,
          seleccion: key.seleccion,
          cantidad: 1

        })
        this.registrosCarritoFinal.push('carritoFinal1')
      } else {
        for (let i = 0; i < this.carritoFinal.length; i++) {
          if (this.carritoFinal[i].idArticulo === exist[0].idArticulo && this.carritoFinal[i].adicionales.length == 0) {
            this.carritoFinal[i].cantidad = this.carritoFinal[i].cantidad + 1;
          }
         
        }

      

      }
      console.log(this.carritoFinal);

    }

  }

  sumarCantidad(obj) {

    this.DataCarrito.push({
      idx: this.registrosCarrito.length + 1,
      costoEstimado: obj.costoEstimado,
      descripcion: obj.descripcion,
      idArticulo: obj.idArticulo,
      nombreArticulo: obj.nombreArticulo,
      seleccion: obj.seleccion,
      adicionales: obj.adicionales

    })
    this.registrosCarrito.push('incremento1');


    localStorage.setItem('data', JSON.stringify(this.DataCarrito));

    this.agregarCarrito(this.DataCarrito);


    this.total = this.total + obj.costoEstimado;

    localStorage.setItem('total', this.total.toString());
  }



  restarCantidad(obj, id) {

    if (obj.cantidad > 1) {
      let index;
      const existe = this.DataCarrito.filter(x => x.idArticulo === obj.idArticulo && x.adicionales.length == 0);
      if (existe.length >= 1) {
        index = existe[0];
        this.DataCarrito.splice(index, 1);
      }


      for (let i = 0; i < this.carritoFinal.length; i++) {
        if (this.carritoFinal[i].idx === obj.idx) {
          this.carritoFinal[i].cantidad = this.carritoFinal[i].cantidad - 1;
        }
      }


      if (this.total != 0) {
        this.total = this.total - obj.costoEstimado;

      } else {
        this.total = 0;
      }

    }

    localStorage.setItem('data', JSON.stringify(this.DataCarrito));
    localStorage.setItem('total', this.total.toString());

    console.log(this.DataCarrito)
  }



  borrar(data, pos) {

    let index;
    for (let i = 0; i < this.carritoFinal.length; i++) {
      if (this.carritoFinal[i].idx == data.idx) {
        index = this.carritoFinal.indexOf(this.carritoFinal[i]);
        this.carritoFinal.splice(index, 1);
      }

    }

    let index2;
    for (let i = 0; i < this.DataCarrito.length; i++) {
      if (this.DataCarrito[i].idArticulo === data.idArticulo && this.DataCarrito[i].adicionales == data.adicionales) {
        index2 = this.DataCarrito.indexOf(this.DataCarrito[i]);
        this.DataCarrito.splice(index2, 1);
      }
      
    }

    let sumaTotal = data.costoEstimado;
    if (data.adicionales.length >= 1) {
      for (let i = 0; i < data.adicionales.length; i++) {
        sumaTotal = parseInt(sumaTotal, 0) + parseInt(data.adicionales[i].valorAdicional, 0);
        
      }
    }

    if (this.total != 0) {
      this.total = this.total - sumaTotal;

    } else {
      this.total = 0;
    }

    localStorage.setItem('data', JSON.stringify(this.DataCarrito));
    localStorage.setItem('total', this.total.toString());
    this.Lista.closeSlidingItems();

  }


  enviarPedido(data){
    this.router.navigate(['/viewfinal'])
  }
  seguirComprando(){
    this.router.navigate(['/inicio'])
  }

  async elimninarPedido(){
    const alert = await this.alertcCtrl.create({
      header: '¿Estas seguro que deseas eliminar tu pedio?',
      mode:'md',
      buttons: [
        {
          text:'Aceptar',
          role:'confirm',
        
          handler:() =>{
            console.log('elimino pedido')
            localStorage.clear()
            this.router.navigate(['/viewinicial'])

          }
        },
        {
          text:'Cancelar',
          role:'cancel',
          
          handler: ()=>{
            /* console.log('no pasa nada') */
          }
        }
      
      ],
     
    });
    await alert.present();
  }

}
