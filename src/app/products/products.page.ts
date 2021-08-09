import { Component, OnInit } from '@angular/core';
// import { Product } from '../models/product.model';
import { ProductService } from '../services/http-request/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products = [];
  
  constructor(private productService: ProductService) { }
  ngOnInit() {
   this.getImages('nike shoes');
  }

  getImages(search: string){
    this.productService.getImages(search).subscribe((res) => {
      console.log(res['results']);
      this.products = res['results'];
    });
  }

}
