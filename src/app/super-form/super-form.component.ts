import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-super-form',
  templateUrl: './super-form.component.html',
  styleUrls: ['./super-form.component.css']
})
export class SuperFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(value:any){
    console.log(value);
  }
  onResetForm(formProfile: NgForm){
    console.log(formProfile);
    formProfile.reset();
  }
}
