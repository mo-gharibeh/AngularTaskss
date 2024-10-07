import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  ngOnInit() {
    this.getCart();
  }
  constructor(private _ser: UrlService) { }

  cartArray: any;
  getCart() {
    this._ser.cartItemOber.subscribe((data) => {
      this.cartArray = data;
    });

  }

  incrementQuantity(id: any) {
    this._ser.incQuantity(id)
  }

  decrementQuantity(id: any) {
    this._ser.decQuantity(id)
  }
}
