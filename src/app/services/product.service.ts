//Injectable: enjekte edilecek servis.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

//
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
apiUrl= "https://localhost:7254/api/";

constructor(private httpClient:HttpClient) { }

getProducts():Observable<ListResponseModel<Product>>{
  let newPath = this.apiUrl + "products/getall";
    //apiUrl'e istekte bulun ve gelen datayı ProductResponseModel'e map et.
    return this.httpClient.get<ListResponseModel<Product>>(newPath);   
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId;
    //apiUrl'e istekte bulun ve gelen datayı ProductResponseModel'e map et.
    return this.httpClient.get<ListResponseModel<Product>>(newPath);   
  }
}