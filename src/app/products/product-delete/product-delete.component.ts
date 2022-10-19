import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Products } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
})
export class ProductDeleteComponent implements OnInit {
  id: any;
  product!: Products;
  constructor(
    private _ProductService: ProductService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._ProductService.find(id).subscribe((product) => {
        this.product = product;
        })
      })
  }
  delete(){
    this._ProductService.destroy(this.id).subscribe(() => {
      this._Router.navigate(['products']);
      alert('Xóa sản phẩm thành công');
    }, (e: any) => {
      console.log(e);
    })
  }
}
