import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TotalinfoComponent } from 'src/app/components/totalinfo/totalinfo.component';
import { InicioService } from './inicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  listaGrupoVenta : any =[];
  clasesGruposVenta : any = [];
  // clasesIdGrupo:any =[];
  datosGrupo:any =[];
  @Input() contadorCart:number = 0;
  @Input() total:number = 0;
  DataCarrito:any=[];
 


  constructor( private inicioService : InicioService ,
               public popoverCtrl: PopoverController,
               public router: Router ) { }

  ngOnInit() {
    this.getGrupoVenta();
   
  }

  getGrupoVenta(){
    this.inicioService.getClasesGruposVenta().subscribe(data => { 
   
      this.listaGrupoVenta = data;
      return this.listaGrupoVenta;
    })
  }

  getClasesGruposVent(){
    this.inicioService.getClasesGruposVenta().subscribe(data => {
      return data;
    })
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: TotalinfoComponent,
      event: ev,
      animated:true,
      mode:"ios",
      translucent: false
    });
  
    await popover.present();
  }


  redireccion(id, name){
   this.datosGrupo.IdGrupo = id;
   this.datosGrupo.NameGrupo = name;

   // this.router.navigateByUrl(`frutas`)

   /* this.router.navigate(['frutas/' + this.datosGrupo.IdGrupo + '/' + this.datosGrupo.NameGrupo]); */
   this.router.navigate([`gruposventa/${this.datosGrupo.IdGrupo}/${this.datosGrupo.NameGrupo}`]);
  
  }





}
