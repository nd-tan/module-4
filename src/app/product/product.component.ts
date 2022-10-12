import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  imgUrl:string ="https://pluralsight.imgix.net/author/lg/51b653bf-bb6e-48d0-9fd2-ca8db65bf1e6.jpg";
  title='hello';
  day='2022/10/12';
  callPhone(phone: string): void {
    alert(phone);

}
}

