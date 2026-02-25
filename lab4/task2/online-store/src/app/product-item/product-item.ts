import { Component, input } from '@angular/core';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  product = input.required<Product>();
  shareOnWhatsapp() {
    const url = `https://wa.me/?text=Check out this product: ${this.product().link}`;
    window.open(url, '_blank');
  }
}
