import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/http-request/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // redirect
      const recipeId = paramMap.get('productId');
      this.productService.getImage(recipeId).subscribe(res => {
        console.log(typeof res);
        console.log('respuesta get photo ', res);
        this.product = res;
      });
    })
  }

}
