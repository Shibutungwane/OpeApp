import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http:HttpClient) { }  

productList() {
  return this.http.get<any>(`https://dummyjson.com/products/category/laptops`).pipe(
    map(res => res.products)
  );
}
}


