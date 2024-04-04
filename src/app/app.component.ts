import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './components/navi/navi.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root', //uygulamadaki html tagi
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NaviComponent, CategoryComponent, ProductComponent, ReactiveFormsModule],
  templateUrl: './app.component.html', //bu adresin componenti sin.
  styleUrl: './app.component.css' 
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Melih Dinçer'
}