import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrls: ['./bai3.component.css'],
  template: `
    <div>
      <table>
        <tr>
          <td [attr.colspan]="3">three</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </table>
    </div>
  `,
})
export class Bai3Component implements OnInit {
  constructor() {}
  color: string= 'blue';
  set(){
    return {
      'color': this.color
    }
  }
  ngOnInit(): void {}
  so1: any = '';
  so2: any = '';
  cocu: any = '';
  ketqua: any = '';
  error: any = '';
  cocula(b: string) {
    this.ketqua="";
    this.so2 = Number.parseInt(b);
    switch (this.cocu) {
      case '+':
        this.ketqua=this.so1+this.so2;
        break;
      case '-':
        this.ketqua=this.so1-this.so2;
        break;
      case '*':
        this.ketqua=this.so1*this.so2;
        break;
      case '/':
        if(this.so2==0)
        {
          this.ketqua="sai roi hihi";
          break;
        }else{
          this.ketqua=this.so1/this.so2;
          break;
        }
      default:
        break;
    }
  }
  coculate(a: string) {
    this.ketqua+=a;
  }
  sum(a: string) {
    this.so1 = Number.parseInt(a);
    this.cocu = '+';
    this.ketqua = '';
  }
  brand(a: string) {
    this.so1 = Number.parseInt(a);
    this.cocu = '-';
    this.ketqua = '';
  }
  multi(a: string) {
    this.so1 = Number.parseInt(a);
    this.cocu = '*';
    this.ketqua = '';
  }
  divede(a: string) {
    this.so1 = Number.parseInt(a);
    this.cocu = '/';
    this.ketqua = '';
  }
  reset(){
    this.ketqua="";
  }
  dele(a:string){
    // console.log(a);
    // this.ketqua="1243";
    this.ketqua=a.slice(0,-1);
  }
}
