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
      {
      id: 1,
      categoryId: 1,
      name: 'iPhone 15 Pro',
      description: 'Флагман от Apple с титановым корпусом и мощным процессором A17 Pro.',
      price: 550000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h20/86300836954142.jpg?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-sim-nataral-titanium-113134513/',
      likes: 0
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Samsung Galaxy S23 Ultra',
      description: 'Флагман от Samsung с 200 МП камерой и мощным процессором Snapdragon 8 Gen 2.',
      price: 450000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?srsltid=AfmBOoqQesLH98LEL-y2sNny5wUyYcSgtNejmMtKyIjIJ7F6wFjHHG4S',
      likes: 0
    },
    {
      id: 3,
      categoryId: 1,
      name: 'Xiaomi 13 Pro',
      description: 'Флагман от Xiaomi с 1-дюймовым сенсором камеры и мощным процессором Snapdragon 8 Gen 2.',
      price: 350000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/h9c/86597718605854.png?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/xiaomi-13-pro-12-gb-256-gb-belyi-109329947/?srsltid=AfmBOor4FvDeLwoEQKEaF6e1SCWglCGTVP23dLBZYBUF9HgmTaXRiZL-',
      likes: 0
    },
    {
      id: 4,
      categoryId: 1,
      name: 'Google Pixel 7 Pro',
      description: 'Флагман от Google с чистым Android и мощной камерой.',
      price: 300000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/h67/63603038289950.jpg?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-128-gb-chernyi-107066141/?c=750000000',
      likes: 0
    
    },
    {
      id: 5,
      categoryId: 2,
      name: 'Ноутбук HP Laptop 15-fc0072ci',
      description: 'Флагман от HP с мощным процессором Intel Core i7 и 120 Гц экраном.',
      price: 320000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2b/pfa/12037040.jpg?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/hp-laptop-15-fc0072ci-15-6-8-gb-ssd-512-gb-bez-os-a19wcea-131090992/?c=750000000',
      likes: 0
    },
    {
      id: 6,
      categoryId: 2,
      name: 'Ноутбук Lenovo LOQ 15.6',
      description: 'Флагман от Lenovo с 4K экраном и мощной камерой.',
      price: 400000,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7e/p5d/89085369.jpeg?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/lenovo-loq-15-6-full-hd-gaming-laptop-15-6-16-gb-ssd-512-gb-win-11-home-83jc0olyus-152920147/?c=750000000',
      likes: 0
    },
    {
      id: 7,
      categoryId: 2,
      name: 'Ноутбук HP HP OmniBook 5 ',
      description: 'Флагман от HP с сенсорным экраном и 120 Гц частотой обновления.',
      price: 380000,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p47/pe8/88848223.jpeg?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/hp-hp-omnibook-5-flip-2-in-1-14-2k-touch-screen-laptop-14-16-gb-ssd-512-gb-win-11-home-b86q7ua-aba-149722196/?c=750000000',
      likes: 0
    
    },
    {
      id: 8,
      categoryId: 2,
      name: 'Ноутбук HP Laptop 15-fd0325ci 15.6" IPS',
      description: 'Флагман от HP с мощным процессором Intel Core i7 и 120 Гц экраном.',
      price: 370000,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0a/pe7/95714871.png?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/hp-laptop-15-fd0325ci-15-6-16-gb-ssd-512-gb-bez-os-d18p8ea-154678929/?c=750000000',
      likes: 0
    },
    {
      id: 9,
      name: 'Наушники Apple AirPods 4 белый',
      categoryId: 3,
      description: 'Флагман от Apple с мощным звуком и удобной посадкой.',
      price: 280000,
      rating: 4.1,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
      likes: 0
    },
    {
      id: 10,
      categoryId: 3,
      name: 'Наушники Apple AirPods Pro 2nd generation ',
      description: 'Флагман от Apple с активным шумоподавлением и мощным звуком.',
      price: 360000,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
      likes: 0
    }, 
    {
      id: 11,
      categoryId: 3,
      name: 'Наушники Sony WH-1000XM5',
      description: 'Флагман от Sony с лучшим в классе шумоподавлением и мощным звуком.',
      price: 320000,
      rating: 3.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
      likes: 0
    },
    {
      id: 12,
      categoryId: 3,
      name: 'Наушники Bose QuietComfort 45',
      description: 'Флагман от Bose с мощным звуком и комфортной посадкой.',
      price: 300000,
      rating: 3.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-45-chernyi-102978612/?c=750000000',
      likes: 0
    },
    {
      id: 13,
      categoryId: 4,
      name: 'Планшет Apple iPad Pro 12.9 2022',
      description: 'Флагман от Apple с мощным процессором M1 и 120 Гц экраном.',
      price: 450000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h0e/64900017389598.jpg?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-2022-wi-fi-12-9-djuim-8-gb-128-gb-seryi-107277956/?c=750000000',
      likes: 0
    },
    {
      id: 14,
      categoryId: 4,
      name: 'Планшет Samsung Galaxy Tab S8 Ultra',
      description: 'Флагман от Samsung с 14.6-дюймовым экраном и мощным процессором Snapdragon 8 Gen 1.',
      price: 400000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5f/1647298.png?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s10-ultra-14-6-djuim-12-gb-256-gb-seryi-128152132/?c=750000000',
      likes: 0
    },
    {
      id: 15,
      categoryId: 4,
      name: 'Планшет Apple iPad Air 10.9 2022',
      description: 'Флагман от Apple с мощным процессором M1 и 10.9-дюймовым экраном.',
      price: 350000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-10-9-2022-wi-fi-10-9-djuim-8-gb-256-gb-seryi-104235732/?c=750000000',
      likes: 0
    },
    {
      id: 16,
      categoryId: 4,
      name: 'Планшет Microsoft Surface Pro 8',
      description: 'Флагман от Microsoft с мощным процессором Intel Core i7 и 13-дюймовым экраном.',
      price: 380000,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0f/p0d/75959572.jpg?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/microsoft-surface-pro-12-inch-x-plus-copilot-pc-ep2-33670-12-djuim-16-gb-256-gb-serebristyi-149012938/?c=750000000',
      likes: 0
    },
    {
      id: 17,
      categoryId: 1,
      name: 'OnePlus 11',
      description: 'Флагман от OnePlus с мощным процессором Snapdragon 8 Gen 2 и 120 Гц экраном.',
      price: 300000,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/h57/82828181864478.png?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/oneplus-11-16-gb-512-gb-zolotistyi-112551457/?c=750000000',
      likes: 0
    },
    {
      id: 18,
      categoryId: 2,
      name: 'Ноутбук ASUS ROG Zephyrus G14',
      description: 'Флагман от ASUS с мощным процессором AMD Ryzen 9 и 120 Гц экраном.',
      price: 420000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa2/pe5/48835854.jpg?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-14-32-gb-ssd-1000-gb-bez-os-90nr0m82-m000w0-141343982/?c=750000000',
      likes: 0
    },
    {
      id: 19,
      categoryId: 3,
      name: 'Наушники Sennheiser Momentum 4 Wireless',
      description: 'Флагман от Sennheiser с мощным звуком и комфортной посадкой.',
      price: 310000,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h79/85291510988830.jpg?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/naushniki-sennheiser-momentum-true-wireless-4-chernyi-117012062/?c=750000000',
      likes: 0
    },
    {
      id: 20,
      categoryId: 4,
      name: 'Планшет Lenovo Tab P12 Pro', 
      description: 'Флагман от Lenovo с 12.6-дюймовым экраном и мощным процессором Snapdragon 870.',
      price: 360000,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3b/p01/77344134.bin?format=gallery-large',
      images: ['url1', 'url2', 'url3'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-seryi-113807107/?c=750000000',
      likes: 0
    }
    ];
  }
}