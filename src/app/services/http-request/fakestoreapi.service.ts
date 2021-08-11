import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FakestoreapiService {
  ENDPOINT = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<any[]>(`${this.ENDPOINT}`);
  }

  getProduct(id: string) {
    return this.httpClient.get<any>(`${this.ENDPOINT}/${id}`);
  }

  getProductsByCategory(category: string) {
    return this.httpClient.get<any[]>(`${this.ENDPOINT}/category/${category}`);
  }

  getAllCategories() {
    return this.httpClient.get<any[]>(`${this.ENDPOINT}/categories`);
  }
}
