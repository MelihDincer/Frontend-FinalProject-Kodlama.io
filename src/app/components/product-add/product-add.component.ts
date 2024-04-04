import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-product-add',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './product-add.component.html',
    styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit {
  
  productAddForm: FormGroup;

  constructor(private formBuilder:FormBuilder, 
    private productService:ProductService,
    private toastrService:ToastrService) 
    {
      this.productAddForm = new FormGroup({
        productName: new FormControl(),
        unitPrice: new FormControl(),
        unitsInStock: new FormControl(),
        categoryId: new FormControl()
      })
    }

  ngOnInit(): void {
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName:["",Validators.required],
      unitPrice:["", Validators.required],
      unitsInStock:["",Validators.required],
      categoryId:["",Validators.required]
    })
  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({},this.productAddForm.value) //Bizim product model için bir obje oluşturuyor. Aynı zamanda productAddForm.value içerisindeki bütün alanları alıp o objenin içerisine atacaktır.
      this.productService.add(productModel).subscribe(response=>{
        console.log(response)
        this.toastrService.success(response.message, "Başarılı")
      },responseError=>{
        console.log(responseError.error)
        this.toastrService.error(responseError.error)
      })
    }
    else{
      this.toastrService.error("Formunuz eksik", "Dikkat")
    }
  }

}
