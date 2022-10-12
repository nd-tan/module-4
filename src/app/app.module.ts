import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';/////
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Bai2Component } from './bai2/bai2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Bai2Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
