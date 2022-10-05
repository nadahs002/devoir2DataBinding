import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',

})
export class BindingComponent implements OnInit {
  titre: string="Apprendre le data binding dans angular 10";
  status: boolean= true ;
  nom : string= "nada"

  changer_titre(){
    this.titre="mon nouveau titre"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
