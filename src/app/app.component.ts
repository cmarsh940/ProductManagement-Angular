import { ProductService } from './product.service';
import { Product } from './product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Management';

  products = [
    new Product(1, 'Apple Mac Book', 1700, '../../assets/mac.jpeg'),
    new Product(2, 'Cassette Player', 0, '../../assets/cassette.png')
  ];

  constructor(private _productService: ProductService) {
    this._productService.updateProducts(this.products);
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    })
  }
}