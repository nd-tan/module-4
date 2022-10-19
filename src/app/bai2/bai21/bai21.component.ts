import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bai21',
  templateUrl: './bai21.component.html',
  styleUrls: ['./bai21.component.css']
})
export class Bai21Component implements OnInit {
  @Input() item: string[]=[];
  @Output() newItemEvent = new EventEmitter<any[]>();
  @Output() conclick = new EventEmitter<any>();
  arr:any[]=[
    {
      'name': 'hai',
      'age': 18
    },
    {
      'name': 'vinh',
      'age': 21
    }
  ];

  addNewItem() {
    this.newItemEvent.emit(this.arr);
    }
  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    this.conclick.emit();
  }

}
