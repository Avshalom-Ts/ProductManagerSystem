import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductData } from './add-product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'http://localhost:3000/product';

  constructor(private http: HttpClient) {}

  // Add Product
  addProduct(data: ProductData) {
    return this.http.post(this.url, data);
  }

  // Display Product
  getProduct() {
    return this.http.get<ProductData[]>(this.url);
  }
}
