import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/http-request/product.service';
import { FakestoreapiService } from '../../../services/http-request/fakestoreapi.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {

  product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private fakeStoreApiService: FakestoreapiService
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('productId'); 
      this.fakeStoreApiService.getProduct(recipeId)
        .subscribe(res => {
          this.product = res;
        })
      // this.productService.getImage(recipeId).subscribe(res =>{
      //   console.log(typeof res);
      //   console.log('respuesta get photo ', res);
      //   this.product = res;
      // })
    })
  }

}
