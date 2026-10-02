import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common'; 
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular';
import { ProductsService } from '../../services/products.service';

@Component({
  standalone: true,
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  imports: [NgFor, IonContent, IonGrid, IonRow, IonCol]
})
export class ProductosPage implements OnInit {
  products: any = [
    {
      id: 1,
      nombre: "Portátil Dell (Prueba)",
      unidades: 12,
      precio: 1200,
      foto: "assets/images/dell.jpg"
    },
    {
      id: 2,
      nombre: "Monitor LG (Prueba)",
      unidades: 8,
      precio: 299,
      foto: "assets/images/lg.jpg"
    }
  ];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
  }
}