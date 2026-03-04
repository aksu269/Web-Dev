import { Component, input, signal, computed, output } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem], 
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  allProducts = input.required<Product[]>();
  selectedCategoryId = input.required<number | null>();

  removedIds = signal<number[]>([]);

  filteredProducts = computed(() => {
    const categoryId = this.selectedCategoryId();
    if (!categoryId) return [];
    
    return this.allProducts().filter(p => 
      p.categoryId === categoryId && !this.removedIds().includes(p.id)
    );
  });

  handleDelete(id: number) {
    this.removedIds.update(ids => [...ids, id]);
  }
}