import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { Bai2Component } from './bai2/bai2.component';
import { Bai3Component } from './bai3/bai3.component';
import { Bai4Component } from './bai4/bai4.component';
import { RouterModule, Routes } from '@angular/router';
import { Bai21Component } from './bai2/bai21/bai21.component';
import { SuperFormComponent } from './super-form/super-form.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ProductsComponent } from './products/products.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductDeleteComponent } from './products/product-delete/product-delete.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes =[
  {path: 'bai4', component: Bai4Component},
  {path: 'bai2', component: Bai2Component},
  {path: 'bai3', component: Bai3Component},
  {path: 'form', component: SuperFormComponent},
  {path: 'form1', component: SimpleFormComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'product/add',component: ProductAddComponent},
  {path: 'product/edit/:id', component: ProductEditComponent},
  {path: 'product/delete/:id', component: ProductDeleteComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Bai2Component,
    Bai3Component,
    Bai4Component,
    Bai21Component,
    SuperFormComponent,
    SimpleFormComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDeleteComponent,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,FormsModule,
    RouterModule.forRoot(routes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
