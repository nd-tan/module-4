import { Component, OnInit, Input } from '@angular/core';
// import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css'],
})
export class Bai2Component implements OnInit {
  currentItem: string[] = ['IPhone 12','sam sum','nokia'];
  constructor() {}
  items :any[]=[];
  addItem(arr:any[]){
   this.items=arr;
   }
  ngOnInit(): void {}
  imgUrl: string =
    'https://pluralsight.imgix.net/author/lg/51b653bf-bb6e-48d0-9fd2-ca8db65bf1e6.jpg';
  ketqua:number =0;
  mis: string = '';
  tinh(so1: string, so2: string, select: any) {
    this.mis = '';
    this.ketqua = 0;
    let so_1 = Number.parseInt(so1);
    let so_2 = Number.parseInt(so2);
    switch (select) {
      case '+':
        this.ketqua = so_1 + so_2;
        break;
      case '-':
        this.ketqua = so_1 - so_2;
        break;
      case '*':
        if (so_1 == 0 || so_2 == 0) {
          this.mis = 'không hợp lệ';
          break;
        }
        this.ketqua = so_1 * so_2;
        break;
      case '/':
        if (so_2 == 0) {
          this.mis = 'không hợp lệ';
          break;
        }
        this.ketqua = so_1 / so_2;
        break;
      default:
        this.mis = '';
        break;
    }
  }
  chaclick(){
    alert('cha click');
  }
}
