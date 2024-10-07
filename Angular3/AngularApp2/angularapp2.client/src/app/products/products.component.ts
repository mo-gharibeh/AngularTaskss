import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  ngOnInit() {
    this.getProduct();
  }

  constructor(private _ser: UrlService) { }


  array: any;
  getProduct() {
    this._ser.getAllProduct().subscribe(data => {
      this.array = data;
    });

  }

  object = {
    cartId: 0,
    productId: 0,
    userId: 0,
    quantity: 0,
}

  addToCart(productId: any) {

    this.object.productId = productId;
    this._ser.addToCart({ ...this.object });
  }
}
