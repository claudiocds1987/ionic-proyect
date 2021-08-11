import { Component, OnInit } from '@angular/core';
import { FakestoreapiService } from '../../../services/http-request/fakestoreapi.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  products = [];
  
  constructor(
    private fakestoreapiService: FakestoreapiService,
    private cartService: CartService
    ) { }
  
  ngOnInit() {
   this.getProducts();
  }

  getProducts(){
    this.fakestoreapiService.getProducts().subscribe(res => {
      this.products = res;
    })
  }

  addCart(product: any){
    console.log(product);
    //this.cartService.addProduct(product);
    localStorage.clear();
  }

}
