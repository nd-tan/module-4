import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai4',
  templateUrl: './bai4.component.html',
  styleUrls: ['./bai4.component.css']
})
export class Bai4Component implements OnInit {

  constructor() { }
  show:boolean = false;
  numbers:number[]=[];
  mark:any=0;
  next:any=1;
  timeleft:any=0;
  maxtime:any=200;
  timeStart:any=false;
  shuffle(array:any) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
  ngOnInit(): void {
    this.timeleft=this.maxtime;
    for(let i=1; i<=50; i++)
    {
      this.numbers.push(i);
      this.numbers=this.shuffle(this.numbers)
    }
  }
  play(){
    this.show=true;
    this.numbers=this.shuffle(this.numbers)
    this.timeleft=this.maxtime;
    if(!this.timeStart)
    {
      setInterval(()=>{this.timeleft--;},1000)
    }
  }
  reset(){
    alert(`điểm của bạn là ${this.mark}`);
    this.mark=0;
    this.show=false;
    this.timeleft=this.maxtime;
    clearInterval(this.timeStart)
    this.timeStart=null;
  }
  playgame(number:any){
    if(number==this.next)
    {
      this.mark++;
      this.next++;
      this.mark=number;
      this.numbers=this.shuffle(this.numbers)
    }else{
      this.reset();
    }
  }


}
