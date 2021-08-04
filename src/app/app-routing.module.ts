import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
        import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./products/products.module').then(
                (m) => m.ProductsPageModule
              ),
          },
          {
            path: ':productId',
            loadChildren: () =>
              import('./products/product-detail/product-detail.module').then(
                (m) => m.ProductDetailPageModule
              ),
          },
        ],
      },
    ],
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'products',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./products/products.module').then(
  //           (m) => m.ProductsPageModule
  //         ),
  //     },
  //     {
  //       path: ':productId',
  //       loadChildren: () =>
  //         import('./products/product-detail/product-detail.module').then(
  //           (m) => m.ProductDetailPageModule
  //         ),
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
