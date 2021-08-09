import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ProductDetailComponent } from './components/product-detail/product-detail.component'; // ?

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'products/:productId',
    component: ProductDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
