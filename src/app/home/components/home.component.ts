import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { ProductosService } from 'src/app/productos/service/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productos;

  constructor(private ps: ProductosService) {
    this.ps.getProductos().subscribe((data) => {
      this.productos = data;
      console.log(this.productos);
    });
  }

  ngOnInit(): void {}
}
