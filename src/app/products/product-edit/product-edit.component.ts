import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Products } from '../model/product';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
  id:any;
  product!:Products;
  productForm!: FormGroup;
  constructor(
    private _ProductService: ProductService,
    private _ActivatedRoute:ActivatedRoute,
    private _Router: Router
    ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      let staff = this._ProductService.find(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name,[
          Validators.required,
          Validators.minLength(3)
        ]),
      });
    });
  });

  }
  onSubmit(){
    let data = this.productForm.value;
    // console.log(data);
    let product: Products = {
      name: data.name,
    }
    this._ProductService.update(this.id,product).subscribe(() => {
      alert('Cập nhật sản phẩm thành công');
      this._Router.navigate(['products']);
    },
      e => {
        console.log(e);
      })
  }

}
