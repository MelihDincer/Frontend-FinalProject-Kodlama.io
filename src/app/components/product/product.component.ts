import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
/*
  product= {
    productId: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitPrice: 500
  }; //any yazılmasa da olur. Herşey olabilir. Bu yüzden obje olarak tutarız.
  product2 = {
    productId: 2,
    productName: 'Laptop',
    categoryId: 1,
    unitPrice: 500
  };
  product3 = {
    productId: 3,
    productName: 'Mouse',
    categoryId: 1,
    unitPrice: 500
  };
  product4 = {
    productId: 4,
    productName: 'Keyboard',
    categoryId: 1,
    unitPrice: 500
  };
  product5 = {
    productId: 5,
    productName: 'Camera',
    categoryId: 1,
    unitPrice: 500,
    unitsInStock:50
  };
  */
  products:Product[] = [];
  // productResponseModel: ProductResponseModel={};

  //constructor'ın amacı product component'i bellekte oluşturmaktır.newlemektir.onun instance'ını oluşturursunuz.
  //Dependency injection mekanizması burada hazır olarak gelmektedir.
  constructor(private httpClient:HttpClient) { } //HttpClient türünde bir nesne istemiş oluyoruz burada. private yazmamızın sebebi sadece bu sınıf üzerinden httpClient'a erişilsin diyedir. 

  //ProductComponent açıldığında çalışan metot: ngOnInit()
  ngOnInit() {
    console.log("Init çalıştı");
  }

  getProducts(){
    this.httpClient.get("")
  }

}
