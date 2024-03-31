import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

//Router-outlet kısmında ne göstereceğimizi burada belirtmekteyiz.
export const routes: Routes = [
    //Ana Sayfa
    {path:"", pathMatch:"full", component:ProductComponent},
    {path:"products", component:ProductComponent}
];
