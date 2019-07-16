import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewinicial',
  templateUrl: './viewinicial.page.html',
  styleUrls: ['./viewinicial.page.scss'],
})
export class ViewinicialPage implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {
  }

  iniciar(){
    this.router.navigate(['/inicio'])
  }

}
