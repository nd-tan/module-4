import { Injectable } from '@angular/core';
import { Products } from '../model/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable,of} from 'rxjs';
const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'http://127.0.0.1:8000/api/categories';
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Products[]>{
    return this.httpClient.get<Products[]>(apiUrl);
  }
  store( product: Products): Observable<Products> {
    return this.httpClient.post<Products>(apiUrl + '/store/', product);
  }
  update(id:number,product:Products): Observable<Products> {
    return this.httpClient.put<Products>(`${apiUrl}/update/${id}`, product);
  }
  destroy(id:any): Observable<Products>{
    return this.httpClient.delete<Products>(`${apiUrl}/delete/${id}`);
  }
  show(){

  }
  find(id:any): Observable<Products>{
    return this.httpClient.get<Products>(`${apiUrl}/edit/${id}`);
  }
}
