import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  formProfile!: FormGroup;
  constructor() {}
  ngOnInit(): void {
    this.formProfile=new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.email
      ]),
    })
  }
  onSubmit(){
    console.log(this.formProfile.value);
  }

}
