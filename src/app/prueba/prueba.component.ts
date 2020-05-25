import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

title="Hola mundo";

ngOnInit(){
  
  this.title = 'sarasa';
}

  

}
