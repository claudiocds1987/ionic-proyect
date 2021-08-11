import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: any[] = [];
  // instance cart from BehaviorSubject class
  public cart = new BehaviorSubject<any[]>([]);
  // cart$ observer of BehaviorSubject cart
  public cart$ = this.cart.asObservable();

  constructor() { }

  addProduct(product: any){
    if(localStorage.getItem('shoppingCart') != null){
      this.products = JSON.parse(localStorage.getItem('shoppingCart'));
      this.products = [...this.products, product];
      localStorage.setItem('shoppingCart', JSON.stringify(this.products));
      // updating BehavoirSubject cart
      this.cart.next(this.products);
    }else{
      // first charge in products array
      this.products = [];
      this.products = [...this.products, product];
      // sending value to BehavoirSubject cart
      this.cart.next(this.products);
      // Creating localStorage shoppingCart for first time
      localStorage.setItem('shoppingCart', JSON.stringify(this.products));
    }
  }


}
