import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewfinal',
  templateUrl: './viewfinal.page.html',
  styleUrls: ['./viewfinal.page.scss'],
})
export class ViewfinalPage implements OnInit {

  constructor( private router : Router ) { }

  ngOnInit() {
  }

  volverInicio(){
    localStorage.clear()
    this.router.navigate(['/viewinicial']);
  }

}
