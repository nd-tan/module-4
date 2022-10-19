import { Injectable } from '@angular/core';
import { Products } from '../model/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'https://634e6c61f34e1ed8268b7a8b.mockapi.io/product/products';
@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Products[]>{
    return this.httpClient.get<Products[]>(apiUrl);
  }
  store( product: Products): Observable<Products> {
    return this.httpClient.post<Products>(apiUrl + '', product);
  }
  update(id:number,product:Products): Observable<Products> {
    return this.httpClient.put<Products>(`${apiUrl}/${id}`, product);
  }
  destroy(id:any): Observable<Products>{
    return this.httpClient.delete<Products>(`${apiUrl}/${id}`);
  }
  show(){

  }
  find(id:any): Observable<Products>{
    return this.httpClient.get<Products>(`${apiUrl}/${id}`);
  }
}
