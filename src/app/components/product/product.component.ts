import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  dataLoaded = false;


  //constructor'ın amacı product component'i bellekte oluşturmaktır.newlemektir.onun instance'ını oluşturursunuz.
  //Dependency injection mekanizması burada hazır olarak gelmektedir.
  constructor(private productService:ProductService) { } //HttpClient türünde bir nesne istemiş oluyoruz burada. private yazmamızın sebebi sadece bu sınıf üzerinden httpClient'a erişilsin diyedir. 

  //ProductComponent açıldığında çalışan metot: ngOnInit()
  ngOnInit(): void {
    // console.log("Init çalıştı");
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true
    })
  }
  
}