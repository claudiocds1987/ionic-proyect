import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  cartItems = 0;

  constructor(
    private menuctrl: MenuController,
    private cartService: CartService
  ) {
    this.cartService.cart$.subscribe((products) => {
      this.cartItems = products.length;
    });
  }

  ngOnInit() {}

  toggleMenu() {
    this.menuctrl.toggle();
  }
}
