import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css'],
})
export class ProductItem {
  product = input.required<Product>();
  remove = output<number>(); 
  shareOnWhatsapp() {
    const url = `https://wa.me/?text=Check out this product: ${this.product().link}`;
    window.open(url, '_blank');
  }
  onLike() {
    this.product().likes++;
  }

  onDelete() {
    this.remove.emit(this.product().id);
  }
}
