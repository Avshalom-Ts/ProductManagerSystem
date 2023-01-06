import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductData } from './add-product/product.model';
import { ActivatedRouteSnapshot } from '@angular/router';

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

  // Delete Product
  deleteProduct(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  // Update Product
  updateProduct(data: ProductData, id: number) {
    return this.http.put<ProductData>(`${this.url}/${id}`, data);
  }

  // On Edit Product
  getProductById(id: number) {
    return this.http.get<ProductData>(`${this.url}/${id}`);
  }
}
