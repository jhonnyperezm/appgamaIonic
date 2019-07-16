import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-totalinfo',
  templateUrl: './totalinfo.component.html',
  styleUrls: ['./totalinfo.component.scss'],
})
export class TotalinfoComponent implements OnInit {


  
@Input() total:number = 0;


  constructor( ) { }

  ngOnInit() {
  
  }

  
}
