import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
  //ActivatedRoute build in bir angular servisidir. Aktifleştirilmiş route(mevcut route)'u okumak için kullanılmıştır.Burada category id değerini okumak amaçlanmaktadır.
  constructor(private productService:ProductService, //HttpClient türünde bir nesne istemiş oluyoruz burada. private yazmamızın sebebi sadece bu sınıf üzerinden httpClient'a erişilsin diyedir. HttpClient ProductService'in constructorındadır.
    private activatedRoute:ActivatedRoute) { } 

  //ProductComponent açıldığında çalışan metot: ngOnInit()
  ngOnInit(): void {
    // console.log("Init çalıştı");
    // this.getProducts();
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){ //categoryId diye bir şey varsa
          this.getProductsByCategory(params["categoryId"])
      }
      else{ //yoksa
        this.getProducts();
      }
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true
    })
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true
    })
  }
  
}