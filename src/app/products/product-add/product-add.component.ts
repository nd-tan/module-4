import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from '../model/product';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
})
export class ProductAddComponent implements OnInit {
  productForm!: FormGroup;
  constructor(private ProductService: ProductService,
    private _Router:Router) {
  }
  ngOnInit(): void {
    this.productForm = new FormGroup({
      'name': new FormControl(''),
    })
  }
  onSubmit() {
    let data = this.productForm.value;
    let product: Products = {
      name: data.name,
    }
    this.ProductService.store(product).subscribe(() => {
      alert('Thêm sản phẩm thành công');
      this._Router.navigate(['products']);
    },
      e => {
        console.log(e);
      })
  }
}
