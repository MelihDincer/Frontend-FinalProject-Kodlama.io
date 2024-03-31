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
  
apiUrl= "https://localhost:7254/api/Products/getall";

constructor(private httpClient:HttpClient) { }

getProducts():Observable<ListResponseModel<Product>>{
    //apiUrl'e istekte bulun ve gelen datayı ProductResponseModel'e map et.
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);   
  }
}