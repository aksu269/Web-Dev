import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getCategories(): Category[] {
    return [
      { id: 1, name: 'Смартфоны' },
      { id: 2, name: 'Ноутбуки' },
      { id: 3, name: 'Наушники' },
      { id: 4, name: 'Планшеты' }
    ];
  }

  getProducts(): Product[] {
    return [
      { id: 1, categoryId: 1, name: 'iPhone 15', price: 450000, likes: 0, rating: 4.9, description: '...', image: '...', images: [], link: '...' },
      // Добавь сюда остальные 19 товаров (по 5 на категорию)
    ];
  }
}