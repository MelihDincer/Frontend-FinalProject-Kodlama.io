import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartSummaryComponent } from "../cart-summary/cart-summary.component";

@Component({
    selector: 'app-navi',
    standalone: true,
    templateUrl: './navi.component.html',
    styleUrls: ['./navi.component.css'],
    imports: [RouterModule, CartSummaryComponent]
})
export class NaviComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
