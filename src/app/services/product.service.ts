//Injectable: enjekte edilecek servis.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

//
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
apiUrl= "https://localhost:7254/api/Products/getall";

constructor(private httpClient:HttpClient) { }

getProducts():Observable<ProductResponseModel>{
    //apiUrl'e istekte bulun ve gelen datayı ProductResponseModel'e map et.
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);   
  }
}