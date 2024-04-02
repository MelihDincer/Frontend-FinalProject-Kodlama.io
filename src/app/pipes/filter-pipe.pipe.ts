import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], filterText:string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText
    ?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1) // Aradığımız filtre yoksa -1
    :value;
  }

}
