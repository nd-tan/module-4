import { Component, Injectable, OnInit } from '@angular/core';
import { Products } from './model/product';
import { ProductService } from './service/product.service';


// import { Products } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  // styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(
    private product: ProductService) {
  }
  ngOnInit(): void {
    this.list();
  }
  list(){
    this.product.getAll().subscribe(res => {
      this.products = res;
    });
    // console.log(this.product.getAll());

  }
}
